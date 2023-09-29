import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() labels: any = [];
  @Input() series: any = [];



  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "donut"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.chartOptions.labels = changes['labels'].currentValue;
    this.chartOptions.series = changes['series'].currentValue;
  };



}
