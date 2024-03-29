import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { AuthService } from "../services/auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(public auth: AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken : string = this.auth.getLocalAuthToken();
        const authReq = req.clone({
            headers: req.headers.set(
              "x-jwt-token", localStorage.getItem("ioAuthToken")
          )
        });
        console.log("INSIDE INTERCEPTOR")
       
        return next.handle(authReq)
    }

}