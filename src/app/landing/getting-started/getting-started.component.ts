import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CamundaService } from 'src/app/shared/services/camunda.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  constructor( private router:Router,public camundaService:CamundaService){}
    goToBPMNPage(event){
      this.router.navigate(["/landing/activeprocess"])
    }
    initiateBPMNInstance(event){
      this.camundaService.initiateBPMNInstance("IPManagementBusinessProcess").subscribe((data)=>{
       console.log("INITIATED !!");
      })
    }
}
