// src/app/announcement/announcement-form/announcement-form.component.ts

import { Component } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  announcementData: any = {
    title: '',
    description: '',
    publish_date: '',
    department: 'Science',
    course: null,
    instructor: null
  };
  courses: any[] = [];
  instructors: any[] = [];
  constructor(private announcementService: AnnouncementService,private http: HttpClient, private notificationService:NotificationService) { }
  ngOnInit(): void {
    // Fetch assignment data from the API
    this.http.get('http://localhost:8000/api/courses/').subscribe(
      (data: any) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching assignments:', error);
      }
    );

    // Fetch student data from the API
    this.http.get('http://localhost:8000/api/instructors/').subscribe(
      (data: any) => {
        this.instructors = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }


  submitForm() {
    this.announcementService.createAnnouncement(this.announcementData).subscribe(
      (response) => {
        console.log('Announcement created successfully:', response);
        this.notificationService.setNotification('Announcement created Successfully'); // Set the notification message
        alert("Announcement created Successfully")
        // Optionally, reset the form or perform other actions
      },
      (error) => {
        console.error('Error creating announcement:', error);
      }
    );
  }
}
