import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { CamundaService } from '../../shared/services/camunda.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public camundaService: CamundaService,public authService:AuthService) { 
  }
  bpmnProcessId: string = "IPManagementBusinessProcess";
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.authService.getLoggedInUser().subscribe((loggedInUser)=>{
      this.camundaService.getCamundaCurrentTaskScreen(loggedInUser.username,this.bpmnProcessId).subscribe((event)=>{
      Formio.createForm(document.getElementById('formio'),event.currentTaskScreen.substring(1,event.currentTaskScreen.length-1))
      .then(function(form) {
        form.on('submit', (submission) => {
        this.camundaService.completeBpmnInstanceTask(loggedInUser.username,event.currentTaskId,this.bpmnProcessId,[{"name":"nationality","value":"lebanese"}]).subscribe((response)=>{
          this.camundaService.getCamundaCurrentTaskScreen(loggedInUser.username,this.bpmnProcessId).subscribe((emittedEvent)=>{
           setTimeout(function(){window.location.reload();},2000)
          })
        })
        });
        form.on('error', (errors) => {
          console.log('We have errors!');
        })
      }.bind(this));
    });
    })
  }

}
