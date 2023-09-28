import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Transactions } from '../types/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  getListTransctions() {
    return this.httpClient.get<Transactions[]>(`${environment.urlApi}/items`)
    .pipe(take(1));
  }

  getListsummary() {
    return this.httpClient.get(`${environment.urlApi}/summary`)
    .pipe(take(1));
  }
}
