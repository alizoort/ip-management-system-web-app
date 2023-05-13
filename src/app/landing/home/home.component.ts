import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { CamundaService } from '../../shared/services/camunda.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public camundaService: CamundaService) { 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.camundaService.getCamundaCurrentTaskScreen().subscribe((event)=>{
      Formio.createForm(document.getElementById('formio'),event.currentTaskScreen.substring(1,event.currentTaskScreen.length-1))
      .then(function(form) {
        form.on('submit', (submission) => {
        this.camundaService.completeBpmnInstanceTask(event.currentTaskId).subscribe((response)=>{
          this.camundaService.getCamundaCurrentTaskScreen().subscribe((emittedEvent)=>{
           setTimeout(function(){window.location.reload();},2000)
          })
        })
        });
        form.on('error', (errors) => {
          console.log('We have errors!');
        })
      }.bind(this));
    });
  }

}
