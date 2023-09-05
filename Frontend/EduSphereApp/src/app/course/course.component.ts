import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit { // Implement OnInit
  course = {
    course_code: '',
    course_name: '',
    instructor: '', // You may need to change this to match your data structure
    department: '',
    credits: "",
    description: '',
    imageUrl:""
  };

  instructors: any[]=[]; // Array to hold the list of instructors

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch the list of instructors from the API
    this.http.get('http://localhost:8000/api/instructors/').subscribe(
      (response: any) => {
        // Extract the instructor names and IDs from the response
        this.instructors = response.map((instructor: any) => ({
          id: instructor.id,
          name: instructor.name
        }));
      },
      (error) => {
        console.error('Error fetching instructors:', error);
        // Handle the error, e.g., show an error message
      }
    );
  }

  onSubmit() {
    // Send a POST request to your Django backend to create the course
    this.http.post('http://localhost:8000/api/courses/', this.course).subscribe(
      (response) => {
        console.log('Course created successfully:', response);
        alert("Course Created Successfully")
        // You can redirect or show a success message here
      },
      (error) => {
        console.error('Error creating course:', error);
        // Handle the error, e.g., show an error message
      }
    );
  }
}
