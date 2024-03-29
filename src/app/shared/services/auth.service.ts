import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AppService{
  setJwtToken(token: string){
    localStorage.setItem("authToken",token)
  }
  loggedInUser: any;
  constructor(public http:HttpClient) {
    super(http);
  }
  login(userName : string,password: string):Observable<boolean>{
  console.log("INSIDE LOGIN")
    return this.post("/api/auth/signin",{
      "username": userName,
      "password":password
    }).pipe(
      tap((response :any)=> {
        console.log("Response ",response.body.accessToken)
        localStorage.setItem("username",response.body.username)
        this.setJwtToken(response.body.accessToken)
      })
    )
  }
  logout(){
    this.authToken="";
    this.setJwtToken("");
  }
  getLoggedInUser(){
    return this.get("/api/auth/loggedInUser").pipe(
      tap(
        (response:any)=>{
          this.loggedInUser=response
        }
      )
    )
  }
}
