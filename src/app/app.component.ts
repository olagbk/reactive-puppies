import { Component } from '@angular/core';
import { Dog, Horse } from './animal/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dog = new Dog();
  horse = new Horse();
}
