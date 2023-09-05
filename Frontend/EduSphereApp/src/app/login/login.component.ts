import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
    
  formData = {
    email: '',
    name: '',
  };

  constructor(private http: HttpClient,private router:Router) {}

  onSubmit() {
    if (!this.formData.email || !this.formData.name) {
      return; // Prevent submitting empty values
    }

    this.http.post('http://localhost:8000/login/', this.formData).subscribe(
      (response) => {
        // Handle a successful login (e.g., store the token and redirect)
        alert("Login Successfully")
        this.router.navigate(['/student-detail']);
        console.log('Logged in successfully');
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }
}
