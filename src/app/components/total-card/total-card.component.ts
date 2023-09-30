import { Component, Input, OnInit } from '@angular/core';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-total-card',
  templateUrl: './total-card.component.html',
  styleUrls: ['./total-card.component.scss']
})
export class TotalCardComponent implements OnInit {
  @Input() title = '';
  @Input() value:any;

  constructor() { }

  ngOnInit() {

  }


}
