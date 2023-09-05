import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service'; // Import your Ticket service

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  student: any[] = [];
  ticket: any = {
    student_name: '',
    status: 'Open',
    ticket_type: 'Attendance',
    description: '',
    created_at:""
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getStudentName().subscribe(data => {
      this.student = data;
    });
  }

  onSubmit() {
    console.log(this.ticket)
    // Call your Ticket service to submit the ticket data to the backend.
    this.ticketService.createTicket(this.ticket).subscribe(
      (response) => {
        alert("Ticket created Successfully")
        console.log('Ticket submitted successfully:', response);
        // Optionally, reset the form or perform other actions.
      },
      (error) => {
        console.error('Error submitting ticket:', error);
      }
    );
  }
}
