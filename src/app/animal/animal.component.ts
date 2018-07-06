import { Component, Input } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  @Input() type: Animal;
}
