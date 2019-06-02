import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentService } from './stundent.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule
} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Student/Student.component';
import { FilterPipe } from './student/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, StudentService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
