import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Import the Student interface
import { Student } from '../student.model'; // Adjust the path as needed

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent {
  studentData: Student[]=[]; // Use the Student type here

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudentData();
  }

  fetchStudentData() {
    this.http.get<Student[]>('http://localhost:8000/api/students/').subscribe(data => {
      this.studentData = data;
    });
  }

  deleteStudent(studentId: number) {
    this.studentData = this.studentData.filter(student => student.student_id !== studentId);
  }
}
