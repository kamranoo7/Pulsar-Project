// src/app/submission-form/submission-form.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent {
  submissionData: any = {
    submission_date: '',
    status: 'Submitted',
    remarks: '',
    assignment: null,
    student: null
  };
  assignments: any[] = []; // Store assignment data
  students: any[] = [];    // Store student data


  constructor(private submissionService: SubmissionService, private http: HttpClient) { }
  ngOnInit(): void {
    // Fetch assignment data from the API
    this.http.get('http://localhost:8000/api/assignments/').subscribe(
      (data: any) => {
        this.assignments = data;
      },
      (error) => {
        console.error('Error fetching assignments:', error);
      }
    );

    // Fetch student data from the API
    this.http.get('http://localhost:8000/api/students/').subscribe(
      (data: any) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  submitForm() {
    this.submissionService.createSubmission(this.submissionData).subscribe(
      (response) => {
        console.log('Submission created successfully:', response);
        // Optionally, reset the form or perform other actions
      },
      (error) => {
        console.error('Error creating submission:', error);
      }
    );
  }
}
