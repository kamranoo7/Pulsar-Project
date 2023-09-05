import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  imageUrls: string[] = [
    'https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg',
    'https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg',
    // Add more image URLs here
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }, 3000); // Change the interval duration (in milliseconds) as needed
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
