import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingWrapperComponent } from './landing-wrapper/landing-wrapper.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { CamundaService } from '../shared/services/camunda.service';
import { BpmnProcessWrapperComponent } from './bpmn-process-wrapper/bpmn-process-wrapper.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';



@NgModule({
  declarations: [
    HomeComponent,
    LandingWrapperComponent,
    BpmnProcessWrapperComponent,
    GettingStartedComponent,
  ],
  imports: [
    LandingRoutingModule,
    SharedModule
  ],
  providers: [CamundaService,]
})
export class LandingModule { }
