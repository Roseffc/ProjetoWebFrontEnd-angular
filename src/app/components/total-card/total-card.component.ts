import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-card',
  templateUrl: './total-card.component.html',
  styleUrls: ['./total-card.component.scss']
})
export class TotalCardComponent implements OnInit {
  @Input() title = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() {
  }


}
