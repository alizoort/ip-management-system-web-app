import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { ConfigService } from '../config.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public configService: ConfigService) { 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.configService.getCamundaCurrentTaskScreen().subscribe((event)=>{
      let currentUrl :string =event.currentTaskScreen; 
      Formio.createForm(document.getElementById('formio'),event.currentTaskScreen.substring(1,event.currentTaskScreen.length-1))
      .then(function(form) {
        form.on('submit', (submission) => {
          console.log("EVENT ",event)
        this.configService.completeBpmnInstanceTask(event.currentTaskId).subscribe((response)=>{
          this.configService.getCamundaCurrentTaskScreen().subscribe((emittedEvent)=>{
            console.log("current TASK SCREEN ",emittedEvent);
            window.location.href=emittedEvent.currentTaskScreen;
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
