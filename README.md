# ReactivePuppies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## `FollowDirective`

Static background image:

`<div ngControlsFollow></div>`

With animation sequence:

```@Component({
  selector: 'custom-component',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  sequence = ['../assets/sequence/1.svg',
              '../assets/sequence/2.svg',
              '../assets/sequence/3.svg',
              // etc.
              ]
}

<custom-component [ngControlsFollow]="sequence"></custom-component>

--app
---custom.component.ts
--assets
---sequence
----1.svg
----2.svg
----3.svg
    (etc.)

