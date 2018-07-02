import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { MouseService } from '../mouse.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  src$ = new BehaviorSubject<number>(1);
  dogX$: BehaviorSubject<number>;
  dogY$: BehaviorSubject<number>;
  mouseSubscription: Subscription;


  constructor(private mouse: MouseService) {  }

  ngOnInit() {  }

  followMouse() {
    this.mouse.onFirstMove((event: MouseEvent) => {

      // initialize dog
      this.dogX$ = new BehaviorSubject<number>(event.clientX);
      this.dogY$ = new BehaviorSubject<number>(event.clientY);
    });

    this.listenToMouse();
  }

  toggleMouse() {
    if (this.mouseSubscription.closed) {
      this.listenToMouse();
    } else {
      this.mouseSubscription.unsubscribe();
    }
  }

  listenToMouse() {
    this.mouseSubscription = this.mouse.listenWith(this.src$, ([event, source]) => {
      const mouseEvent = event as MouseEvent;

      this.dogX$.next(mouseEvent.clientX);
      this.dogY$.next(mouseEvent.clientY);

      // update image sequence
      this.src$.next(source < 8 ? ++source : 1);
    });
  }
}
