import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppService } from './app.service';
@Injectable()
export class CamundaService extends AppService {

  selectedForm :any;
  constructor(public http:HttpClient){
    super(http);
   }
  public getCamundaCurrentTaskScreen(username:string,bpmnProcessId: string){
    return this.post("/ip-management-system/currentScreenUrl",{
        "username":username,
        "bpmnProcessId":bpmnProcessId
    })
  }
  public completeBpmnInstanceTask(username:string,taskId:string,bpmnProcessId:string,decisionVariables:any){
    return this.patch(
      "/ip-management-system/completeProcessInstance",{
        "username":username,
        "bpmnProcessId":bpmnProcessId,
        "taskId":taskId,
        "variables":decisionVariables
    }
    )
  }
}