import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(public auth: AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken : string = this.auth.getAuthorizationToken();
        const authReq = req.clone({
            headers: req.headers.set('Authorization',authToken)
        });
        console.log("INSIDE INTERCEPTOR")
        return next.handle(authReq);
    }

}