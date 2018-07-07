import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { MouseService } from './mouse/mouse.service';

@Directive({
  selector: '[ngControlsFollow]'
})
export class FollowDirective implements OnInit {
  src$: BehaviorSubject<number>;
  position$: BehaviorSubject<number[]>;
  mouseSubscription: Subscription;

  @Input('ngControlsFollow') source: string;

  @HostListener('click')
  private toggleMouse() {
    this.mouseSubscription.closed
    ? this.listenToMouse()
    : this.mouseSubscription.unsubscribe();
  }

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private mouse: MouseService) { }

  ngOnInit() {
    this.followMouse();
  }

  private followMouse() {
    this.mouse.onFirstMove((event: MouseEvent) => {

      this.src$ = new BehaviorSubject<number>(1);
      this.position$ = new BehaviorSubject<number[]>([event.clientX, event.clientY]);

      this.position$.subscribe(([x, y]) => {
        this.updateImage(x, y);

      });
    });

    this.listenToMouse();
  }

  private updateImage(x: number, y: number) {
    const imgNumber = this.src$.getValue();
    const imgElement = this.el.nativeElement;


    this.renderer.setStyle(imgElement, 'left', `${x}px`);
    this.renderer.setStyle(imgElement, 'top', `${y}px`);

    if (this.source) {
      // animate background image sequence
      this.renderer.setStyle(imgElement, 'backgroundImage', `url('${this.source}/${imgNumber}.svg')`);
      this.src$.next(imgNumber < 8 ? imgNumber + 1 : 1);
    }

  }


  private listenToMouse() {
    this.mouseSubscription = this.mouse.listen((event) => {
      const mouseEvent = event as MouseEvent;
      const x = mouseEvent.clientX - .5 * this.el.nativeElement.clientWidth;
      const y = mouseEvent.clientY - .5 * this.el.nativeElement.clientHeight;

      this.position$.next([x, y]);

    });
  }

}
