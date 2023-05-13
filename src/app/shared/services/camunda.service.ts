import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppService } from './app.service';
@Injectable()
export class CamundaService extends AppService {
 
  constructor(public http:HttpClient){
    super(http);
   }
  public getCamundaCurrentTaskScreen(){
    return this.post("/ip-management-system/currentScreenUrl",{
        "username":"ali",
        "bpmnProcessId":"IPManagementBusinessProcess"
    })
  }
  public completeBpmnInstanceTask(taskId:string){
    return this.http.patch<any>("/ip-management-system/completeProcessInstance",{
        "username":"ali",
        "bpmnProcessId":"IPManagementBusinessProcess",
        "taskId":taskId,
        "variables":[{"name":"nationality","value":"lebanese"}]
    });
  }
}