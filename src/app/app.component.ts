import {Component, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(DogComponent) dog: DogComponent;
  @HostListener('click')
  onClick() {
    this.dog.toggleMouse();
  }

  constructor() {}

  ngOnInit() {
    this.dog.followMouse();
  }
}
