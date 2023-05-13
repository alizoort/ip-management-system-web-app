import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean =false;
  constructor() { }
  login(userName : string,password: string):Observable<boolean>{
    this.isUserLoggedIn = userName == 'admin' && password =='admin';
    localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? "true":"false");
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("Is User Authentication is Successful");
      })
    )
  }
  getAuthorizationToken():string {
    return "";
  }
}
