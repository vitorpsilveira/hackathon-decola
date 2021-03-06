import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {MatRadioModule} from '@angular/material/radio';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {MatInputModule} from '@angular/material/input';
import { EsportesCardComponent } from './components/esportes-card/esportes-card.component';
import { EsportesPageComponent } from './components/esportes-page/esportes-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { RankingComponent } from './components/ranking/ranking.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuPagLayoutComponent,
    ExemploComponent,
    SobrePageComponent,
    EsportesCardComponent,
    QuizPageComponent,
    InicioComponent,
    EsportesPageComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // extra
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule
  ],
  providers:  [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
