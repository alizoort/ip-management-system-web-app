import { Component } from '@angular/core';
import { Formio } from 'formiojs';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CamundaService } from 'src/app/shared/services/camunda.service';

@Component({
  selector: 'app-bpmn-process-wrapper',
  templateUrl: './bpmn-process-wrapper.component.html',
  styleUrls: ['./bpmn-process-wrapper.component.scss']
})
export class BpmnProcessWrapperComponent {
  bpmnProcessId: string = "IPManagementBusinessProcess";
  constructor(public camundaService: CamundaService,public authService:AuthService,public spinnerService: NgxSpinnerService){}
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
