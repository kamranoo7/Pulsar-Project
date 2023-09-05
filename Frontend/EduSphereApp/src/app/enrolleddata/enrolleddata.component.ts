import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-enrolleddata',
  templateUrl: './enrolleddata.component.html',
  styleUrls: ['./enrolleddata.component.css']
})
export class EnrolleddataComponent {
  enrolledData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8000/api/enrollments/').subscribe(data => {
      // Handle the data here
      
      console.log(data); // For testing purposes
      this.enrolledData = data; // Assign data to a variable for use in the template
    });
  }
}
