import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MisionComponent,
    VisionComponent
  ]
})
export class PageSinc17Module { }
