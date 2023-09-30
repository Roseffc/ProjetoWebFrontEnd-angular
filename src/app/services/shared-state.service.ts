import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

periodState$ = new Subject<any>();

constructor() { }

setPeriodState(data:any) {
  this.periodState$.next(data)
}

}
