// notification.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string | null>(null);

  setNotification(message: string) {
    this.notificationSubject.next(message);
  }

  getNotification(): Observable<string | null> {
    return this.notificationSubject.asObservable();
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }
}
