import { CurrencyPipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  summary:any = {};

  constructor(private transactionService:TransactionService,
    private currencyPipe: CurrencyPipe,
      @Inject(LOCALE_ID) private locale: string | undefined
    ){ }

  ngOnInit() {
    this.getListSummary();
  }

  getListSummary() {
    this.transactionService.getListsummary().subscribe((sumary)=>{
      this.summary=sumary
    })
  }

  formatarComoMoeda(valor: number) {
    return String(this.currencyPipe.transform(valor, 'BRL', 'symbol', '1.2-2', this.locale));
  }

}
