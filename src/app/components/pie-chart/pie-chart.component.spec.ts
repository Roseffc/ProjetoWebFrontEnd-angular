import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { ChartComponent } from 'ng-apexcharts';


/* tslint:disable:no-unused-variable */
describe('PieChartComponent', () => {
  let fixture: ComponentFixture<PieChartComponent>;
  let component: PieChartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent],
    });
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
  });

  it('should update chartOptions when labels and series change', () => {
    const newLabels = ['Label1', 'Label2'];
    const newSeries = [10, 20];

    component.labels = newLabels;
    component.series = newSeries;

    fixture.detectChanges();

    expect(component.chartOptions.labels).toEqual(newLabels);
    expect(component.chartOptions.series).toEqual(newSeries);
  });

  // Adicione mais casos de teste conforme necessário...
});






// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { PieChartComponent } from './pie-chart.component';

// describe('PieChartComponent', () => {
//   let component: PieChartComponent;
//   let fixture: ComponentFixture<PieChartComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PieChartComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PieChartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
