import { VisionComponent } from './page-sinc17/vision/vision.component';
import { MisionComponent } from './page-sinc17/mision/mision.component';
import { HomeComponent } from './page-sinc17/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page-sinc17/about/about.component';
import { ContactComponent } from './page-sinc17/contact/contact.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent, children:[
    {path:'mision', component:MisionComponent},
    {path:'vision', component:VisionComponent}
  ]},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
