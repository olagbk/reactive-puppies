import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, first,  withLatestFrom } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  src$: BehaviorSubject<number>;
  dogX$: BehaviorSubject<number>;
  dogY$: BehaviorSubject<number>;

  ngOnInit() {
    this.src$ = new BehaviorSubject<number>(0);
    const mouse$ = fromEvent(document, 'mousemove');

    // initialize dog position on first mouse move - this allows the image to render
    mouse$.pipe(first()).subscribe((event: MouseEvent) => {

      this.dogX$ = new BehaviorSubject<number>(event.clientX);
      this.dogY$ = new BehaviorSubject<number>(event.clientY);
    });

    // filter consecutive events and attach last image id in sequence
    const mousemove$ =
      mouse$.pipe(
        debounceTime(15),
        withLatestFrom(this.src$)
      );

    mousemove$.subscribe(([event, source]) => {
      const mouseEvent = event as MouseEvent;

      // update coordinates
      this.dogX$.next(mouseEvent.clientX);
      this.dogY$.next(mouseEvent.clientY);

      // update image sequence
      this.src$.next(source < 8 ? ++source : 1);

    });
  }
}
