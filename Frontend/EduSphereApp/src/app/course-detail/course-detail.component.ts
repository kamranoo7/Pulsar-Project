import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  courseData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8000/api/courses/').subscribe(data => {
      // Handle the data here
    
      console.log(data); // For testing purposes
      this.courseData = data; // Assign data to a variable for use in the template
    });
  }
}
