import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TotalCardComponent } from './components/total-card/total-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedStateService } from './services/shared-state.service';

registerLocaleData(localePtBr);


@NgModule({
  declarations: [
    AppComponent,
    TotalCardComponent,
    DashboardComponent,
    TransactionListComponent,
    PieChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgApexchartsModule
  ],
  providers: [TransactionService, CurrencyPipe, SharedStateService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
