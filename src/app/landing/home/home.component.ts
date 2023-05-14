import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { CamundaService } from '../../shared/services/camunda.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public camundaService: CamundaService,public authService:AuthService,public spinnerService: NgxSpinnerService) { 
  }
  bpmnProcessId: string = "IPManagementBusinessProcess";
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.spinnerService.show();
    this.authService.getLoggedInUser().subscribe((loggedInUser)=>{
      this.camundaService.getCamundaCurrentTaskScreen(loggedInUser.username,this.bpmnProcessId).subscribe({
        next: (event)=>{
          
            Formio.createForm(document.getElementById('formio'),event.currentTaskScreen)
            .then(function(form) {
              form.on('submit', (submission) => {
                this.spinnerService.show();
                this.camundaService.completeBpmnInstanceTask(loggedInUser.username,event.currentTaskId,this.bpmnProcessId,[{"name":"nationality","value":"lebanese"}]).subscribe({
                  next: (response)=>{
                    this.camundaService.getCamundaCurrentTaskScreen(loggedInUser.username,this.bpmnProcessId).subscribe({
                      next: (emittedEvent)=>{
                        setTimeout(function(){window.location.reload();
                     this.spinnerService.hide();},2000)
                       },
                       error: (error)=>{
                        this.spinnerService.hide();
                       }
                    })
                  },
                  error: (error)=>{
                    this.spinnerService.hide();
                  }
                })
              });
              form.on('error', (errors) => {
                console.log('We have errors!');
                this.spinnerService.hide()
              })
            }.bind(this)).catch((error)=> this.spinnerService.hide());
            this.spinnerService.hide()
          
        },
        error: (error)=>{
          this.spinnerService.hide();
        }
      });
    })
  }

}
