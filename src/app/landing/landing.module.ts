import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfigService } from '../config.service';
import { LandingWrapperComponent } from './landing-wrapper/landing-wrapper.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LandingWrapperComponent,
  ],
  imports: [
    LandingRoutingModule,
    SharedModule
  ],
  providers: [ConfigService,]
})
export class LandingModule { }
