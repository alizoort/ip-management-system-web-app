import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    let url : string =state.url;
    return this.checkLogin(url);
  }
  checkLogin(url:string):boolean | UrlTree{
    let val = localStorage.getItem('authToken');
    if(val){
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

