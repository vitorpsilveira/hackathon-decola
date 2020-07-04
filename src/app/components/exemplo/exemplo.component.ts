import { Component, OnInit, Input } from "@angular/core";
import { CardQuiz } from "src/app/Services/card-quiz";
import { CardQuizService } from "src/app/Services/card-quiz.service";
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: "app-exemplo",
  templateUrl: "./exemplo.component.html",
  styleUrls: ["./exemplo.component.css"],
})
export class ExemploComponent implements OnInit {
  Resposta: any;
  seasons: any[]=[];

  @Input() cardquiz: CardQuiz;

  Bandeira: string;
  Bronze: Number;
  Ouro: Number;
  Pais: string;
  Posicao: Number;
  Prata: Number;

  constructor(public apiResultados: CardQuizService) {}

  ngOnInit(): void {
    console.log(this.cardquiz);
    if (this.cardquiz != null) {
      this.Bandeira = this.cardquiz.Bandeira;
      this.Bronze = this.cardquiz.Bronze;
      this.Ouro = this.cardquiz.Ouro;
      this.Pais = this.cardquiz.Pais;
      this.Posicao = this.cardquiz.Posicao;
      this.Prata = this.cardquiz.Prata;
      this.apiResultados.nome ;
    }
    this.numerosAleatorios();
    this.seasons.sort();
  }

  public VerificaResposta() {
    if (this.Resposta == this.Ouro) {
      alert("Resposta certa");
      this.apiResultados.acertos ++
    }
    else {
      this.apiResultados.erros ++
    }
  }

  public FinalizaQuiz() {
      alert("Quiz Encerrado: " + this.apiResultados.nome);
    }


  public randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public numerosAleatorios() {
    for (var i = 0; i < 3; i++) {
      var c = this.randomInt(0, 100);
      this.seasons.push(c);
    }
    this.seasons.push(this.Ouro);
  }

  public EscolherMedalha(){
      var c = this.randomInt(0, 2);
      return c;
  }
}
