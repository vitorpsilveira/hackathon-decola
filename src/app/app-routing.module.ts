import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EsportesPageComponent } from './components/esportes-page/esportes-page.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: 'quiz', component: QuizPageComponent },
      { path: '', component: InicioComponent },
      { path: 'sobre', component: SobrePageComponent },
      { path: 'esportes', component: EsportesPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
