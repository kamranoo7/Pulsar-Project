// chatbot.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8000/chatbot_response/';

  constructor(private http: HttpClient) {}

  getChatbotResponse(userInput: string) {
    const url = `${this.apiUrl}?user_input=${encodeURIComponent(userInput)}`;
    return this.http.get<string>(url);
  }
}
