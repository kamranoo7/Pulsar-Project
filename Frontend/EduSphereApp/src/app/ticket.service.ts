import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  getStudentName(): Observable<any> {
    return this.http.get(`${this.baseUrl}students/`);
  }
  

  createTicket(ticketData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}ticket/`, ticketData);
  }
}
