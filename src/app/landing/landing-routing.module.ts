import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingWrapperComponent } from "./landing-wrapper/landing-wrapper.component";
const routes : Routes =[
    {
        path: '',component: LandingWrapperComponent,children: [
            {path:'', pathMatch:'full',redirectTo:'home'},
            {
                path: 'home',component: HomeComponent
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