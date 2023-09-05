import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  createAssignment(assignmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}assignments/`, assignmentData);
  }

  getInstructors(): Observable<any> {
    return this.http.get(`${this.apiUrl}instructors/`);
  }

  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}courses/`);
  }
}
