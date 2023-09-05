import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  instructor = {
    name: '',
    gender: '',
    date_of_birth: '',
    department: '',
    email: '',
    contact_number: ''
    // Add more properties as needed
  };

  constructor(private http: HttpClient, private   router:Router) {}

  onSubmit() {
    // Send the instructor data to the backend API
    this.http.post('http://127.0.0.1:8000/api/instructors/', this.instructor).subscribe(
      response => {
        console.log('Instructor added:', response);
        // Clear the form after successful submission
        this.instructor = {
          name: '',
          gender: '',
          date_of_birth: '',
          department: '',
          email: '',
          contact_number: ''
          // Initialize other properties as needed
        };
        alert("Instructor Added Successfully")
        this.router.navigate(['/instructor-detail']);
      },
      error => {
        console.error('Error adding instructor:', error);
      }
    );
  }
}
