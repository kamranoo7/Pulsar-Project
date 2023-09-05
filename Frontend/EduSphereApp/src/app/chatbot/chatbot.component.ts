import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDrawer } from '@angular/material/sidenav';
import {  ViewChild } from '@angular/core';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  chatbotResponse: string = '';
  @ViewChild('chatbotDrawer', { static: false }) chatbotDrawer!: MatDrawer; // Add '!' here

 

  toggleChatbot() {
    this.chatbotDrawer.toggle();
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user_input = this.userInput.trim(); // Remove leading/trailing spaces
  
    if (user_input) {
      this.http.get(`http://localhost:8000/chatbot_response/?user_input=${user_input}`, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            this.chatbotResponse = response;
          },
          (error) => {
            console.error('Error:', error);
            this.chatbotResponse = 'An error occurred while processing your request.';
          }
        );
    }
  }
  
}
