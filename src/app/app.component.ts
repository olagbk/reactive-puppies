import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime,  withLatestFrom } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dogX: number;
  dogY: number;
  src$ = new BehaviorSubject(0);

  ngOnInit() {

    const mousemove$ =
      fromEvent(document, 'mousemove').pipe(
      debounceTime(15),
      withLatestFrom(this.src$));


    mousemove$.subscribe(([event, source]) => {
      const mouseEvent = event as MouseEvent;
      this.dogX = mouseEvent.clientX;
      this.dogY = mouseEvent.clientY;
      this.src$.next(source < 8 ? ++source : 1);

    });
  }
}
