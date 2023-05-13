import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
export const defaultHttpHeaders ={
  headers: {
    "access-control-allow-origin":"http://localhost:8080/",
    "Content-Type":"application/json",
    "Accept":"*/*",
  }
};
@Injectable()
export class AppService {
  authToken: string = '';
  getLocalAuthToken():string{
    return this.authToken ? this.authToken :  localStorage.getItem('authToken');
  }

    constructor(protected http: HttpClient){}
    public get(endpoint: string,options: any=defaultHttpHeaders):Observable<any>{
      return this.http.get<any>(environment.baseUrl+endpoint,{...options,...{headers: {"Authorization": `Bearer ${this.getLocalAuthToken()}`}}});
    }
    public post(endpoint: string,body:any,options:any=defaultHttpHeaders):Observable<any>{
      return this.http.post<any>(environment.baseUrl+endpoint,body,{...options,...{headers: {"Authorization": `Bearer ${this.getLocalAuthToken()}`}}})
    }
    public put(endpoint: string,body: any,options:any=defaultHttpHeaders){
        return this.http.put(environment.baseUrl+ endpoint,body,{...options,...{headers: {"Authorization": `Bearer ${this.getLocalAuthToken()}`}}});
    }
    public patch(endpoint: string,body:any,options:any=defaultHttpHeaders):Observable<any>{
      return this.http.post<any>(environment.baseUrl+endpoint,body,{...options,...{headers: {"Authorization": `Bearer ${this.getLocalAuthToken()}`}}})
    }
}

