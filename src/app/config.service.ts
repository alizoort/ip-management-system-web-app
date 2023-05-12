import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ConfigService {
   authToken:string ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJpYXQiOjE2ODM4OTc5MzAsImV4cCI6MTY4Mzk4NDMzMH0.GfJvbSMRuW26AgCUAbzGkUFBkPvhnzGZPTE5-7eQ0DWG7y4LLCTK5v5E4aRplwM89h4St3tmlMtsSmCLu5ZVCg" 
  constructor(private http: HttpClient) { }
  public getCamundaCurrentTaskScreen(){
    return this.http.post<any>("http://localhost:8080/ip-management-system/currentScreenUrl",{
        "username":"ali",
        "bpmnProcessId":"IPManagementBusinessProcess"
    }, {
       "headers" : {
         "Authorization":`Bearer ${this.authToken}`,
         "access-control-allow-origin":"http://localhost:8080/",
         "Content-Type":"application/json",
         "Accept":"*/*",

       }
    })
  }
  public completeBpmnInstanceTask(taskId:string){
    return this.http.patch<any>("http://localhost:8080/ip-management-system/completeProcessInstance",{
        "username":"ali",
        "bpmnProcessId":"IPManagementBusinessProcess",
        "taskId":taskId,
        "variables":[{"name":"nationality","value":"lebanese"}]
    }, {
        "headers" : {
          "Authorization":`Bearer ${this.authToken}`,
          "access-control-allow-origin":"http://localhost:8080/",
          "Content-Type":"application/json",
          "Accept":"*/*",
 
        }
     });
  }
}