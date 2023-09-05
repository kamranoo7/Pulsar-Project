import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
  assignmentForm: FormGroup; // Initialize in the constructor

  instructors: any[] = [];
  courses: any[] = [];

  constructor(private fb: FormBuilder, private assignmentService: AssignmentService) {
    this.assignmentForm = this.fb.group({
      title: [''],
      description: [''],
      due_date: [''],
      course: [''],
      name: ['']
    });
  }

  ngOnInit(): void {
    // Fetch instructor and course data
    this.assignmentService.getInstructors().subscribe(data => {
      this.instructors = data;
    });

    this.assignmentService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  createAssignment() {
    const assignmentData = this.assignmentForm.value;
    this.assignmentService.createAssignment(assignmentData).subscribe(response => {
      // Handle success or error here
      alert("Assignment created Successfully")
      console.log('Assignment created:', response);
    });
  }
}
