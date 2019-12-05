import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output()
  update = new EventEmitter<void>();

  timeLeft: number = 1000;
  interval;
  subscribeTimer: any;
  constructor() { }

  ngOnInit() {
  }

  oberserableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
      }
    }, 100)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}