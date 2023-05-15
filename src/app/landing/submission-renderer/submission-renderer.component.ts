import { Component, Input } from '@angular/core';
import { Formio } from 'formiojs';
import { CamundaService } from 'src/app/shared/services/camunda.service';

@Component({
  selector: 'app-submission-renderer',
  templateUrl: './submission-renderer.component.html',
  styleUrls: ['./submission-renderer.component.scss']
})
export class SubmissionRendererComponent {
  constructor(public camundaService: CamundaService){

  }
  formSubmission:any;
  ngOnInit(){
    this.formSubmission = this.camundaService.selectedForm
  }
  ngAfterViewInit(){
    Formio.createForm(document.getElementById('formSubio'),"https://pabudtywntpghop.form.io/ipsimpleform").then((form)=>{
      form.submission ={
        "data": this.formSubmission.data
      }
    })
  }
}
