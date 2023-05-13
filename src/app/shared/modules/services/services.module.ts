import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { SpinnerService } from '../../services/spinner.service';
import { ThirdPartiesModule } from '../third-parties/third-parties.module';



@NgModule({
  declarations: [],
  imports: [
  ]
})
export class ServicesModule { 
  static forShared(): Provider[] {
    return [
     ThirdPartiesModule.forServices(),
     AuthService
    ];
  }
}
