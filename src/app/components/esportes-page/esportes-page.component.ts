import { Component, OnInit } from '@angular/core';
import { EsportesModel } from 'src/app/services/esportes-api/esportes-model';
import { EsportesApiService } from 'src/app/services/esportes-api/esportes-api.service';

@Component({
  selector: 'app-esportes-page',
  templateUrl: './esportes-page.component.html',
  styleUrls: ['./esportes-page.component.css']
})
export class EsportesPageComponent implements OnInit {

  listaEsportes: EsportesModel[];

  constructor(private esporteApi:EsportesApiService) {

  }

  ngOnInit(): void {

    this.esporteApi.List().subscribe((lista) => {
      this.listaEsportes = lista;
    })
  }

}
