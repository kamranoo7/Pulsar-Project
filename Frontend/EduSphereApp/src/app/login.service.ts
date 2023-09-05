import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://your-django-backend-url/api/instructor/login/';

  constructor(private http: HttpClient) {}

  login(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
