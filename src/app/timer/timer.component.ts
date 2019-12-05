import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output()
  compteARebours = new EventEmitter<number>();

  timeLeft: number = 1000;
  interval;
  subscribeTimer: any;
  constructor() { }

  ngOnInit() {
    this.startTimer()
  }

  oberserableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
    console.log("il reste : " + this.timeLeft)
  }
  
  startTimer() {
    this.interval = setInterval(() => {
      this.compteARebours.emit(this.timeLeft);
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
        // this.timeLeft = 1000;
      console.log('La bonne réponse est (bonne réponse) + afficher Vous avez bien répondu/mal répondu')
      }
    }, 10)

  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}