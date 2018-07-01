import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, first, withLatestFrom } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  mouse$: Observable<Event> = fromEvent(document, 'mousemove');

  constructor() { }

  public updateWith($) {
    return this.mouse$.pipe(
        debounceTime(15),
        withLatestFrom($)
      );

  }
  get first() {
    return this.mouse$.pipe(first());
  }
}
