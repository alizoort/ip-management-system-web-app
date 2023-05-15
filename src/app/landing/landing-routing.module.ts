import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingWrapperComponent } from "./landing-wrapper/landing-wrapper.component";
import { GettingStartedComponent } from "./getting-started/getting-started.component";
import { BpmnProcessWrapperComponent } from "./bpmn-process-wrapper/bpmn-process-wrapper.component";
import { SubmissionRendererComponent } from "./submission-renderer/submission-renderer.component";
const routes : Routes =[
    {
        path: '',component: HomeComponent,children: [
            {path:'', pathMatch:'full',redirectTo:'home'},
            {
                path: 'home',component: GettingStartedComponent
            },
            {
                path: 'activeprocess',component: BpmnProcessWrapperComponent
            },
            {
                path:'show',component: SubmissionRendererComponent
            }
        ]
    }
]
@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class LandingRoutingModule {

}