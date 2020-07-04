import { Component, OnInit } from '@angular/core';
import { CardQuiz } from 'src/app/Services/card-quiz';
import { CardQuizService } from 'src/app/Services/card-quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  listaquiz: CardQuiz[];


  constructor(private quizApi: CardQuizService) { }

  ngOnInit(): void {
    this.quizApi.List().subscribe((lista) => {
      console.log(lista);
      this.listaquiz = lista;
    },
    (erro) => {
      console.log(erro);
    }
    )
  }

  public randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public numerosAleatorios() {
      var c = this.randomInt(0, 9);
      return c;
  }

}
