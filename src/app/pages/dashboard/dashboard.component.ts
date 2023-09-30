import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transactions } from 'src/app/types/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  summary = { totalAmount: 0, totalQuantity: 0, netAmount: 0};
  pieChartsValue:any = { };
  transactions: Transactions[] = [];
  startDate = '2021-04-01T12:12:55';
  endDate = '2021-07-30T12:12:55';

  constructor(private transactionService:TransactionService,
    private currencyPipe: CurrencyPipe,
      @Inject(LOCALE_ID) private locale: string | undefined,
      private ref: ChangeDetectorRef,
      private sharedStateService: SharedStateService
    ){ }

  ngOnInit() {
    this.getListTransactions();
    this.onChangeFormSideBar();
  }

  onChangeFormSideBar() {
    this.sharedStateService.periodState$.subscribe((result)=> {
      this.startDate = result.start;
      this.endDate = result.end;
      const filteredItems = this.filterByDate(result);
      this.updateValues(filteredItems);
    });
  }

  getListTransactions() {
    this.transactionService.getListTransctions().subscribe((items)=>{
      this.transactions = items;
      this.updateValues(items);
    })
  }

  updateValues(items:any){
    this.summary.totalAmount = this.sumTotalValue(items, 'grossAmount');
    this.summary.totalQuantity = items.length;
    this.summary.netAmount = this.sumTotalValue(items, 'netAmount')
    const pieChartGroup = this.arrayToGroup(items);
    this.pieChartsValue = {...this.formatPieChart(pieChartGroup)}
    this.ref.detectChanges();
  }

  formatarComoMoeda(valor: number) {
    return String(this.currencyPipe.transform(valor, 'BRL', 'symbol', '1.2-2', this.locale));
  }

  sumTotalValue(values: any[], key:string) {
   return values.reduce((acc, items)=> {
      return acc + items[key];
    }, 0);
  };

  arrayToGroup(values:any[]) {
    return values.reduce((cc, obj)=> {
      if(cc[obj.cardBrand]) {
         cc[obj.cardBrand] += 1
      }else {
        cc[obj.cardBrand] = 1
      }
     return cc
    }, {});
  }

  formatPieChart(values:any[]) {
    const items:any = Object.entries(values);
    const labels = items.map((item:any)=> item[0]);
    const series = items.map((item:any)=> item[1])
    return {labels, series};
  }

  filterByDate(data:any) {
    return this.transactions.filter((item:any)=> {
      const start = new Date(data.start).getTime();
      const end = new Date(data.end).getTime();
      return (new Date(item.date).getTime() > start) && (new Date(item.date).getTime() < end);
    });
  }


}
