import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, first, withLatestFrom } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  mouse$: Observable<Event> = fromEvent(document, 'mousemove');

  constructor() { }

  public onFirstMove(callback): Subscription {
    return this.mouse$.pipe(first()).subscribe(callback);
  }

  public listenWith(ob$, callback): Subscription {
    return this.mouse$.pipe(
      debounceTime(15),
      withLatestFrom(ob$))
      .subscribe(callback);
  }
}
