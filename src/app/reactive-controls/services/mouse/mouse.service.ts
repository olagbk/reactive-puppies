import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, first } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  mouse$: Observable<Event> = fromEvent(document, 'mousemove');

  constructor() { }

  public onFirstMove(callback): Subscription {
    return this.mouse$.pipe(first()).subscribe(callback);
  }

  public listen(callback): Subscription {
    return this.mouse$.pipe(
      debounceTime(15))
      .subscribe(callback);
  }
}
