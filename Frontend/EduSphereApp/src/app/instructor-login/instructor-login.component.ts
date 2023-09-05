import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.css'],
})
export class InstructorLoginComponent {
  
  formData = {
    email: '',
    name: '',
  };

  constructor(private http: HttpClient,private router:Router) {}

  onSubmit() {
    if (!this.formData.email || !this.formData.name) {
      return; // Prevent submitting empty values
    }

    this.http.post('http://localhost:8000/loginn/', this.formData).subscribe(
      (response) => {
        // Handle a successful login (e.g., store the token and redirect)
        alert("Login Successfully")
        this.router.navigate(['/instructor-detail']);
        console.log('Logged in successfully');

      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }
}
