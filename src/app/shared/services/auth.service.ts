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
  constructor(public http:HttpClient) {
    super(http);
  }
  login(userName : string,password: string):Observable<boolean>{
    return this.post("/api/auth/signin",{
      "username": userName,
      "password":password
    }).pipe(
      tap((response :any)=> {
        console.log("Response ",response.accessToken)
        this.setJwtToken(response.accessToken)
      })
    )
  }
}
