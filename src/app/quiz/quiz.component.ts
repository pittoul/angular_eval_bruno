import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { TimerComponent } from '../timer/timer.component';
import { ScoreComponent } from '../score/score.component';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[]; //(les questions à poser)
  iQuestion = 0; //(l’indice de la question en cours)
  currentQuestion: Question; //(la question en cours)
  answer: string; //(la réponse)
  found: boolean; //(la réponse a été trouvée ou pas)
  hasNext = true;
  timer = new TimerComponent;
  score = new ScoreComponent;
  temps: number;
  error: string;

  constructor(private myService: QuizServiceService) { }

  ngOnInit() {
    // this.newGame();
    // this.timer.oberserableTimer();
    this.score.score = 0;
    // this.myService.recupererQuestions().subscribe(
    //   (questions: Question[]) => this.questions = questions, // 1ere opération : on prend les Todo et on les met dans la variable globale
    //   error => this.error = error.message // (2eme opération : gestion des erreurs)
    //   )
  }

  newGame() { //pour lancer une partie
    // this.temps = this.timer.startTimer();
    // console.log("on lance une partie")
    // console.log(this.temps)

  }

  loadNextQuestion() { //pour charger la prochaine question

  }

  timeSpent() { //pour lancer un traitement si le temps est écoulé

  }

  answerGiven(answer: string) { //pour proposer une réponse
    console.log(answer)
  }

  showAnswer() { //pour afficher la bonne réponse

  }

}
