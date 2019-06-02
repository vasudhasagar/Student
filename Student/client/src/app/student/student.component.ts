import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../stundent.service';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent implements OnInit {
  dataSaved = false;
  studentForm: any;
  allStudents: Student[];
  studentIdUpdate = null;
  message = null;
  searchText;
  constructor(private formbulider: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.studentForm = this.formbulider.group({
      name: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      school: ['', [Validators.required]]
    });
    this.loadAllStudents();
  }
  loadAllStudents() {
    this.studentService.getAllStudent().subscribe((s)=>  {this.allStudents = s;}, error=>{this.dataSaved = true;  this.message = error.message;}  );;
  }
  onFormSubmit() {
    this.dataSaved = false;
    const student = this.studentForm.value;
    this.studentForm.markAsPristine();
    this.studentForm.markAsUntouched();
    this.CreateStudent(student);
  }
  loadStudentToEdit(studentId: string) {
    this.studentService.getStudentById(studentId).subscribe(s=> {
      this.message = null;
      this.dataSaved = false;
      this.studentIdUpdate = s.id;
      this.studentForm.controls['name'].setValue(s.name);
      this.studentForm.controls['grade'].setValue(s.grade);
      this.studentForm.controls['school'].setValue(s.school);
    }, error=>{this.dataSaved = true;  this.message = error.message;});

  }
  CreateStudent(student: Student) {
    if (this.studentIdUpdate == null) {
      if(this.allStudents && this.allStudents.length>0)
      {
        student.id = this.allStudents[this.allStudents.length-1].id+1;
      }
      else{
        student.id =1;
      }
      this.studentService.createStudent(student).subscribe(
        () => {
          debugger;
          this.dataSaved = true;
          this.message = 'Record saved Successfully';
          this.loadAllStudents();
          this.studentIdUpdate = null;
           this.studentForm.reset();
        } , error=>{this.dataSaved = true;  this.message = error.message;}
      );
    } else {
      student.id = this.studentIdUpdate;
      this.studentService.updateStudent(student).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Updated Successfully';
        this.loadAllStudents();
        this.studentIdUpdate = null;
         this.studentForm.reset();
      } ,error=>{this.dataSaved = true;  this.message = error.message;});
    }
    this.studentForm.reset();
  }
  deleteStudent(studentId: string) {
    if (confirm("Are you sure you want to delete this ?")) {
    this.studentService.deleteStudentById(studentId).subscribe(() => {
      this.dataSaved = true;
      this.message = 'Record Deleted Succefully';
      this.loadAllStudents();
      this.studentIdUpdate = null;
       this.studentForm.reset();
    }, error=>{this.dataSaved = true;  this.message = error.message;});
    
  }
}
  resetForm() {
    this.message = null;
    this.dataSaved = false;
    this.studentForm.reset();
  }
}