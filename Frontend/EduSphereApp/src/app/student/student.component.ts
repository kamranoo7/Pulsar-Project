import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student = {
    name: '',
    student_id: '',
    gender: '',
    date_of_birth: '',
    major: '',
    email: '',
    contact_number: '',
    imageUrl:""
    // Add more properties as needed
  };

  constructor(private http: HttpClient,private router:Router) {}

  onSubmit() {
    // Send the student data to the backend API
    this.http.post('http://127.0.0.1:8000/api/students/', this.student).subscribe(
      response => {
        console.log('Student added:', response);
        // Clear the form after successful submission
        this.student = {
          name: '',
          student_id: '',
          gender: '',
          date_of_birth: '',
          major: '',
          email: '',
          contact_number: '',
          imageUrl:""
          // Initialize other properties as needed
        };
        alert('Student added Successfully')
        this.router.navigate(['/student-detail']);
      },
      error => {
        console.error('Error adding student:', error);
      }
    );
  }
}
