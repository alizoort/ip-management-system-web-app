import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormioAuthService extends AppService {

  constructor(public http:HttpClient) {
    super(http);
   }
   ioAuthToken:string='';
   getLocalAuthToken():string{
    return this.ioAuthToken ? this.ioAuthToken : localStorage.getItem("ioAuthToken");
  }
   setJwtToken(token: string){
    localStorage.setItem("ioAuthToken",token);
  }
  logout(){
    localStorage.setItem("ioAuthToken","");
    this.ioAuthToken='';
  }
   login(email:string,password:string){
    return this.post("/user/login",{
      "data": {
        "email": email,
        "password": password,
    },
    },{},"https://formio.form.io")
   }
   getLoggedInUser(){
    return this.get("/current",{},"https://formio.form.io")
   }
   getAllForms(){
     return this.get("/ipsimpleform/submission",{},"https://pabudtywntpghop.form.io")
   }
}
