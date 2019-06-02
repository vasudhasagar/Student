import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Student } from './student';
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class StudentService {  
  url = 'http://localhost:59677/api/student';  

  constructor(private http: HttpClient) { }  
  getAllStudent(): Observable<Student[]> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.get<Student[]>(this.url, httpOptions);  
  }  
  getStudentById(studentId: string): Observable<Student> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.get<Student>(this.url + '/' + studentId, httpOptions);    
  }  
  createStudent(student: Student): Observable<Student> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.post<Student>(this.url ,  
      student, httpOptions);  
  }   
  updateStudent(student: Student): Observable<Student> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Student>(this.url + '/' +student.id,   
    student, httpOptions);  
  }  
  deleteStudentById(studentId: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +studentId,  
 httpOptions);  
  } 
} 