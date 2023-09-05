import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { InstructorComponent } from './instructor/instructor.component';
import { CourseComponent } from './course/course.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MainComponent } from './main/main.component';
import { Student2Component } from './student2/student2.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EnrolleddataComponent } from './enrolleddata/enrolleddata.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TicketComponent } from './ticket/ticket.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    InstructorComponent,
    CourseComponent,
    EnrollmentComponent,
    
    SubmissionFormComponent,
    AnnouncementComponent,
    MainComponent,
    Student2Component,
    InstructorDetailComponent,
    PagenotfoundComponent,
    CourseDetailComponent,
    EnrolleddataComponent,
    NotificationDetailComponent,
    CreateAssignmentComponent,
    LoginComponent,
    TicketComponent,
    InstructorLoginComponent,
    ChatbotComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
