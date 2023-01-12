import { PageSinc17Module } from './page-sinc17/page-sinc17.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageSinc17Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
