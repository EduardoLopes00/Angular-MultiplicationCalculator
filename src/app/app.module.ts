import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuloMultiComponent } from './modulo-multi/modulo-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloMultiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
