import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EsportesModel } from './esportes-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsportesApiService {

  constructor(private httpClient: HttpClient) { }

  public List(): Observable<EsportesModel[]> {
    return this.httpClient.get<EsportesModel[]>('https://it3qwe.firebaseio.com/olimpiadas/modalidades.json');
  }
}
