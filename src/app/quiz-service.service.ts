import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient) { }

  recupererQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.backRoot}/questions`)

  }
}
