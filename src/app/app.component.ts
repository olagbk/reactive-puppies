import { Component } from '@angular/core';
import { Animal } from './animal/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Animal[] = ['dog', 'horse'];
}
