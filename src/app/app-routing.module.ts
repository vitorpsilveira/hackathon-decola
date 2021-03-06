import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { EsportesPageComponent } from './components/esportes-page/esportes-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RankingComponent } from './components/ranking/ranking.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'quiz', component: QuizPageComponent },
      { path: 'sobre', component: SobrePageComponent },
      { path: 'esportes', component: EsportesPageComponent },
      { path: 'ranking', component: RankingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
