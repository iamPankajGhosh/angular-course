import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  currentTime: string = "";

  constructor() { }

  ngOnInit(): void {
      this.updateTime();
      
      setInterval(() => {
        this.updateTime();
      },1000)
  }

  updateTime(): void {
    this.currentTime = new Date().toLocaleTimeString();
  }
}
