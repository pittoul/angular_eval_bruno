import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { TimerComponent } from '../timer/timer.component';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] //(les questions à poser)
  iQuestion = 0 //(l’indice de la question en cours)
  currentQuestion: Question //(la question en cours)
  answer: string //(la réponse)
  found: boolean //(la réponse a été trouvée ou pas)
  hasNext = true
  timer: TimerComponent
  score: ScoreComponent;

  constructor() { }

  ngOnInit() {
    this.newGame();
    // this.timer.oberserableTimer().s;
    // this.score.score = 0;
  }

  newGame() { //pour lancer une partie
    // this.timer.startTimer();
    // charger premierre question
  }

  loadNextQuestion() { //pour charger la prochaine question

  }

  timeSpent() { //pour lancer un traitement si le temps est écoulé

  }

  answerGiven(answer: string) { //pour proposer une réponse


  }

  showAnswer() { //pour afficher la réponse

  }

}
