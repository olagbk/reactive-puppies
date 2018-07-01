import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Subscription} from 'rxjs';
import { debounceTime, first,  withLatestFrom } from 'rxjs/internal/operators';
import { MouseService } from './mouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  src$ = new BehaviorSubject<number>(0);
  dogX$: BehaviorSubject<number>;
  dogY$: BehaviorSubject<number>;
  mouseSubsciption: Subscription;

  constructor(private mouse: MouseService) {}

  ngOnInit() {
    this.listenToFirstMove();
    this.listen();
  }

  toggleMouse() {
    if (this.mouseSubsciption.closed) {
      this.listen();
    } else {

      this.mouseSubsciption.unsubscribe();

    }
  }
  private listenToFirstMove() {
    this.mouse.first.subscribe((event: MouseEvent) => {

      this.dogX$ = new BehaviorSubject<number>(event.clientX);
      this.dogY$ = new BehaviorSubject<number>(event.clientY);
    });
  }

  private listen() {
    this.mouseSubsciption = this.mouse.updateWith(this.src$).subscribe(([event, source]) => {
      const mouseEvent = event as MouseEvent;

      // update coordinates
      this.dogX$.next(mouseEvent.clientX);
      this.dogY$.next(mouseEvent.clientY);

      // update image sequence
      this.src$.next(source < 8 ? ++source : 1);

    });
  }

}
