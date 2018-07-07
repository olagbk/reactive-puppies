import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowDirective } from './follow.directive';
import { MouseService } from './mouse/mouse.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FollowDirective],
  declarations: [FollowDirective],
  providers: [MouseService]
})
export class ReactiveControlsModule { }
