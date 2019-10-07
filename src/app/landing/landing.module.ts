import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { LandingComponent } from './landing.component';
import { WebComponent } from './web/web.component';


@NgModule({
  declarations: [
    LandingComponent,
    WebComponent  
  ],
  imports:
    [
      CommonModule,
      LandingRoutingModule
    ],
  providers: []
})
export class LandingModule { }