import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { MouseService } from '../mouse/mouse.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  readonly size = 75;
  src$ = new BehaviorSubject<number>(1);
  x$: BehaviorSubject<number>;
  y$: BehaviorSubject<number>;
  mouseSubscription: Subscription;


  constructor(private mouse: MouseService) {  }

  ngOnInit() {  }

  followMouse() {
    this.mouse.onFirstMove((event: MouseEvent) => {

      // initialize dog
      this.x$ = new BehaviorSubject<number>(event.clientX);
      this.y$ = new BehaviorSubject<number>(event.clientY);
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

      this.x$.next(mouseEvent.clientX - .5 * this.size);
      this.y$.next(mouseEvent.clientY - .5 * this.size);

      // update image sequence
      this.src$.next(source < 8 ? ++source : 1);
    });
  }
}
