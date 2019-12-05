import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  // { path: 'articles/:id', component: ArticleComponent },
  // { path: 'articles', component: ArticleComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
