import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { CamundaService } from '../../shared/services/camunda.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public camundaService: CamundaService,public authService:AuthService,public spinnerService: NgxSpinnerService,private router:Router) { 
  }
  opened: boolean=false;

  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }
  logout(event){
    this.router.navigate(["/auth/login"])
  }

}
