import { Component,Renderer2,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild,HostListener  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})


export class Student2Component {
  chatMessages: { role: string; message: string }[] = [];

  notificationMessage: any;
  notificationData: any;
  userInput: string = '';
  chatbotResponse: string = '';
  assignmentData: any;
  isChatbotOpen: boolean = false;
  @ViewChild('chatbotDrawer', { static: false }) chatbotDrawer!: MatDrawer;

  // Function to toggle the chatbot drawer
  


  
  constructor(private http: HttpClient, private route: ActivatedRoute,private notificationService:NotificationService,private renderer: Renderer2, // Inject Renderer2
  private el: ElementRef) { }
  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen; // Toggle the state
    if (this.isChatbotOpen) {
      this.chatbotDrawer.open();
    } else {
      this.chatbotDrawer.close();
    }
    console.log('Chatbot state:', this.isChatbotOpen); // Debug statement
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8000/api/assignments/').subscribe(data => {
      // Handle the data here
      console.log(data); // For testing purposes
      this.assignmentData = data; // Assign data to a variable for use in the template
    });
    this.http.get<any>('http://localhost:8000/api/announcements/').subscribe(data => {
      // Handle the data here
      console.log(data); // For testing purposes
      this.notificationData = data; // Assign data to a variable for use in the template
    });
  
    // Check if there is a query parameter called 'created' (or adjust as needed)
    this.route.queryParams.subscribe(params => {
      if (params['created']) {
        console.log('New announcement created!')
        // Display an alert or notification to indicate a new announcement
        this.notificationMessage = 'You have a new Notification !';
        this.setAutoClearNotification(10000);
      }
    });
  
  
  }
   private setAutoClearNotification(delay: number) {
    // Automatically clear the notification message after the specified delay
    setTimeout(() => {
      this.clearNotification();
    }, delay);
  }

  private clearNotification() {
    this.notificationMessage = null;
  }
  closeNotification() {
    this.notificationService.clearNotification(); // Clear the notification
  }

  onSubmit() {
    const user_input = this.userInput.trim();

    if (user_input) {
      this.chatMessages.push({ role: 'user', message: user_input });

      this.http
        .get(`http://localhost:8000/chatbot_response/?user_input=${user_input}`, {
          responseType: 'text',
        })
        .subscribe(
          (response: string) => {
            this.chatMessages.push({ role: 'chatbot', message: response });
          },
          (error) => {
            console.error('Error:', error);
            this.chatMessages.push({
              role: 'chatbot',
              message: 'An error occurred while processing your request.',
            });
          }
        );
      this.userInput = '';
    }
  }
  
}


