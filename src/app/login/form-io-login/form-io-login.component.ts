import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormioAuthService } from 'src/app/shared/services/formio-auth.service';

@Component({
  selector: 'app-form-io-login',
  templateUrl: './form-io-login.component.html',
  styleUrls: ['./form-io-login.component.scss']
})
export class FormIoLoginComponent {
  email: string;
  password: string;
  formData: FormGroup;
 public constructor(public formioAuthService: FormioAuthService,private router: Router){
 }
ngOnInit(){
  this.formData = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })
}
onClickSubmit(data:any){
  this.email = data.email;
  this.password=data.password;
  this.formioAuthService.login(this.email,this.password).subscribe((data)=>{
   localStorage.setItem("ioAuthToken",data.headers.get("x-jwt-token"))
    this.formioAuthService.ioAuthToken=data.headers.get("x-jwt-token");
    this.router.navigate(["/landing/home"])
    /* this.formioAuthService.getLoggedInUser().subscribe((dataResp)=>{
      console.log("LOGGED IN USER ",dataResp);
    }) */

  })
}
}
