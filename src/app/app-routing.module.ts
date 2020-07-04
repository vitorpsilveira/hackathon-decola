import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
<<<<<<< HEAD
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
=======
import { InicioComponent } from './components/inicio/inicio.component';
import { EsportesPageComponent } from './components/esportes-page/esportes-page.component';
>>>>>>> 0f87ec97a156e8e2b7777f67414fa5065ea2c1ef


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
<<<<<<< HEAD
      { path: '', component: QuizPageComponent },
=======
      { path: '', component: InicioComponent },
>>>>>>> 0f87ec97a156e8e2b7777f67414fa5065ea2c1ef
      { path: 'sobre', component: SobrePageComponent },
      { path: 'esportes', component: EsportesPageComponent },
      { path: 'quiz', component: ExemploComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
