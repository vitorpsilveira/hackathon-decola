import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natacao-page',
  templateUrl: './natacao-page.component.html',
  styleUrls: ['./natacao-page.component.css']
})
export class NatacaoPageComponent implements OnInit {

  title = 'teste';
  descricao = 'teste';
  copyright = 'teste';

  constructor() { }

  ngOnInit(): void {
  }

}
