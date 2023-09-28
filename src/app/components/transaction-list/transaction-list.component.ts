import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transactions } from 'src/app/types/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'cnpjRoot', 'cardBrand', 'netAmount', 'status'];
  dataSource!: MatTableDataSource<Transactions>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   length = 0;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private transactionService:TransactionService) { }

  ngOnInit() {
    this.getListTransaction();
  }

  ngAfterViewInit() {
  }

  getListTransaction() {
    this.transactionService.getListTransctions().subscribe((items)=>{
      this.length = items.length;
      this.dataSource = new MatTableDataSource(items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  handlePaginator(value:any) {
    console.log('paginacao', value)
  }

}
