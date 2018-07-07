import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseService } from './mouse/mouse.service';
import { AnimalComponent } from './animal/animal.component';
import { FollowDirective } from './follow.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    FollowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
