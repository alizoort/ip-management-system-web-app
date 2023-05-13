import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    console.log("INSIDE GUARD")
    let url : string =state.url;
    return this.checkLogin(url);
  }
  checkLogin(url:string):boolean | UrlTree{
     console.log("INSIDE CHECK LOGIN");
    let val = localStorage.getItem('isUserLoggedIn');
    if(val!=null && val =="true" ){
     if(url == "/auth"){
         return this.router.parseUrl('/landing');
     }
     else {
         return true;
     }
  }
  else {
     return this.router.parseUrl('/auth');
  }
  }
  
}

