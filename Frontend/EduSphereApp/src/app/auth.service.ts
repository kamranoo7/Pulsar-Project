import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  login(email: string,name: string): Observable<any> {
    const loginData = { email, name };
    const loginUrl = `${this.apiUrl}/login/`; // Replace with your login API endpoint

    return this.http.post(loginUrl, loginData).pipe(
      catchError((error) => {
        // Handle error, e.g., display an error message
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  // You can add more authentication-related methods here, such as logout, token handling, etc.
}
