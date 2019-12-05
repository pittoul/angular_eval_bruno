import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  score: number;
  constructor() { }

  ngOnInit() {
    this.score = 0;
  }

}
