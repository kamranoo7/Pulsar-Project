// src/app/announcement.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private baseUrl = 'http://localhost:8000/api/announcements/'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  createAnnouncement(announcementData: any): Observable<any> {
    return this.http.post(this.baseUrl, announcementData);
  }
}
