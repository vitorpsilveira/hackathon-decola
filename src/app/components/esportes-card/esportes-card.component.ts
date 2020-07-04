import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EsportesModel } from 'src/app/services/esportes-api/esportes-model';

@Component({
  selector: 'app-esportes-card',
  templateUrl: './esportes-card.component.html',
  styleUrls: ['./esportes-card.component.css']
})
export class EsportesCardComponent implements OnChanges {

  @Input() esportes: EsportesModel;

  Icone: string;
  Nome: string;
  QuantidadeProvas: number;


  constructor() { }

  ngOnChanges(): void {

    if (this.esportes != null) {

      this.Icone = this.esportes.Icone;
      this.Nome = this.esportes.Nome;
      this.QuantidadeProvas = this.esportes.QuantidadeProvas;
    }
  }

}
