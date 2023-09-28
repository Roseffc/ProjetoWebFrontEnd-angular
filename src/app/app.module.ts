import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TotalCardComponent } from './components/total-card/total-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule, CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TotalCardComponent,
    DashboardComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule

  ],
  providers: [TransactionService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
