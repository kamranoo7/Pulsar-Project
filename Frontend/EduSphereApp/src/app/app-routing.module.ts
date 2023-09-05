import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
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
import { TicketComponent } from './ticket/ticket.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  {path:"",component:MainComponent},
  { path: 'add-student', component: StudentComponent },
  { path: 'add-instructor', component: InstructorComponent },
  { path: 'create-course', component: CourseComponent },
  { path: 'enroll', component: EnrollmentComponent },
  {path:"assignment",component:CreateAssignmentComponent},
  {path:'submission',component:SubmissionFormComponent},
  {path:"announcement",component:AnnouncementComponent},
  {path:"student-detail" ,component:Student2Component},
  {path:"instructor-detail",component:InstructorDetailComponent},
  {path:"enrolled-detail", component:EnrolleddataComponent},
  {path:"course-detail",component:CourseDetailComponent},
  {path:"notification-detail",component:NotificationDetailComponent},
  {path:"login",component:LoginComponent},
  {path:"ticket",component:TicketComponent},
  {path:"loginn",component:InstructorLoginComponent},
  {path:"chatbot",component:ChatbotComponent},
  { path: '**', component:PagenotfoundComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
