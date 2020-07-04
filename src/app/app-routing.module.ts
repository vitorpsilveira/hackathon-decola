import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EsportesPageComponent } from './components/esportes-page/esportes-page.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: InicioComponent },
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
