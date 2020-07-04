import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardQuiz } from './card-quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardQuizService {

  nome:string = '';
  acertos: number = 0;
  erros: number = 0;

  constructor(private httpClient: HttpClient) {}

    public List():Observable<CardQuiz[]>{
      return this.httpClient.get<CardQuiz[]>("https://it3qwe.firebaseio.com/olimpiadas/medalhas.json");
    }
}
