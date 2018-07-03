import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseService } from './mouse/mouse.service';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
