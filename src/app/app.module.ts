import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveControlsModule } from './reactive-controls/reactive-controls.module';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
