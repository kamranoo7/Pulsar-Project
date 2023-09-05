import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent {
  notificationData: any;

  constructor(private http: HttpClient, ) { }
  

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8000/api/announcements/').subscribe(data => {
      // Handle the data here
      console.log(data); // For testing purposes
      this.notificationData = data; // Assign data to a variable for use in the template
    });
    
  }
}
