import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    Formio.createForm(document.getElementById('formio'), "https://pabudtywntpghop.form.io/ipsimpleform")
    .then(function(form) {
      form.on('submit', (submission) => {
        console.log("SUBMISSION ",submission);
        window.location.href = 'https://form.io';
      });
      form.on('error', (errors) => {
        console.log('We have errors!');
      })
    });
  }

}
