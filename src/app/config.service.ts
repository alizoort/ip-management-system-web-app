import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ConfigService {
   configUrl : string ="http://localhost:8080/";
  constructor(private http: HttpClient) { }
  public getCamundaCurrentTaskScreen(){
    return this.http.post<any>("http://localhost:8080/ip-management-system/currentScreenUrl",{
        "username":"ali",
        "bpmnProcessId":"IPManagementBusinessProcess"
    }, {
       "headers" : {
         "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcndpbiIsImlhdCI6MTY4MzgzMjY2OSwiZXhwIjoxNjgzOTE5MDY5fQ.CHp_8rAlF--KdJfgdnnBgEeFRrIQmzx0Ov18r2u6Yr4L2ZKgRgWODv1_r2DTc3uarGrJ6aXdsgIgtTr1XdZ6zw",
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
          "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcndpbiIsImlhdCI6MTY4MzgzMjY2OSwiZXhwIjoxNjgzOTE5MDY5fQ.CHp_8rAlF--KdJfgdnnBgEeFRrIQmzx0Ov18r2u6Yr4L2ZKgRgWODv1_r2DTc3uarGrJ6aXdsgIgtTr1XdZ6zw",
          "access-control-allow-origin":"http://localhost:8080/",
          "Content-Type":"application/json",
          "Accept":"*/*",
 
        }
     });
  }
}