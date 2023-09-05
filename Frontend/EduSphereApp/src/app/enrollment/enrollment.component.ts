import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  selectedStudent: string = '';
  selectedCourse: string = '';
  students: any[] = [];
  courses: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch the list of students and courses from your backend
    this.http.get<any[]>('http://127.0.0.1:8000/api/students/').subscribe(data => {
      this.students = data;
    });

    this.http.get<any[]>('http://127.0.0.1:8000/api/courses/').subscribe(data => {
      this.courses = data;
    });
  }

  enrollStudent() {
    // Find the selected student and course objects
    const selectedStudentObj = this.students.find(student => student.name === this.selectedStudent);
    const selectedCourseObj = this.courses.find(course => course.course_name === this.selectedCourse);
  
    if (selectedStudentObj && selectedCourseObj) {
      // Send a POST request to enroll the student
      const enrollmentData = {
        student: selectedStudentObj.id, // Send the student's id
        course: selectedCourseObj.id,   // Send the course's id
      };
  
      this.http.post('http://127.0.0.1:8000/api/enrollments/', enrollmentData).subscribe(response => {
        console.log('Enrollment successful:', response);
        alert("Enrollment Successfully")
      });
    }
  }
  
}
