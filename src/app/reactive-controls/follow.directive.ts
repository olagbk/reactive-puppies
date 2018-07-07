import { Directive, ElementRef, HostListener, OnInit, Renderer2, Self } from '@angular/core';
import { MouseService } from './mouse/mouse.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AnimalComponent } from '../animal/animal.component';

@Directive({
  selector: '[ngControlsFollow]'
})
export class FollowDirective implements OnInit {
  readonly size = 75;
  src$: BehaviorSubject<number>;
  position$: BehaviorSubject<number[]>;
  mouseSubscription: Subscription;
  private source: AnimalComponent;

  @HostListener('click')
  private toggleMouse() {
    this.mouseSubscription.closed
    ? this.listenToMouse()
    : this.mouseSubscription.unsubscribe();
  }

  constructor(@Self() component: AnimalComponent,
              private el: ElementRef,
              private renderer: Renderer2,
              private mouse: MouseService) {
    this.source = component;
  }

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
    const imgElement = this.el.nativeElement.firstChild;

    this.renderer.setAttribute(imgElement, 'src', `../assets/${this.source.type}/${imgNumber}.svg`);
    this.renderer.setStyle(imgElement, 'left', `${x}px`);
    this.renderer.setStyle(imgElement, 'top', `${y}px`);

    this.src$.next(imgNumber < 8 ? imgNumber + 1 : 1);
  }


  private listenToMouse() {
    this.mouseSubscription = this.mouse.listen((event) => {
      const mouseEvent = event as MouseEvent;
      const x = mouseEvent.clientX - .5 * this.size;
      const y = mouseEvent.clientY - .5 * this.size;

      this.position$.next([x, y]);

    });
  }

}
