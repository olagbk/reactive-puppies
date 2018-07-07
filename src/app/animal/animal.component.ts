import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() type: Animal;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `url('../../assets/${this.type}/1.svg'`);
  }
}
