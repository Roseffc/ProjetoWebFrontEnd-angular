import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import {
  ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  categories: any;
  plotOptions: any;
  dataLabels:any;
  xaxis:any
};


@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, OnChanges {

  @Input() labels: any = [];
  @Input() series: any = [];

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: []
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [

        ]
      }
    };
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.chartOptions.xaxis.categories = changes['labels'].currentValue;
    this.chartOptions.series[0].data = changes['series'].currentValue;
  };

}
