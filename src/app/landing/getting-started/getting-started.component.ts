import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  constructor( private router:Router){}
    goToBPMNPage(event){
      this.router.navigate(["/landing/activeprocess"])
    }
}
