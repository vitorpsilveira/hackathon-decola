import { Component, OnInit } from '@angular/core';
import { CardQuizService } from 'src/app/Services/card-quiz.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public apiNome: CardQuizService) { }

  ngOnInit(): void {
  }

}
