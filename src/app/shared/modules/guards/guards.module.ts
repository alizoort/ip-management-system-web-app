import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../guards/auth-guard.guard';



@NgModule({
  declarations: [],
  imports: [

  ]
})
export class GuardsModule { 
  static forShared(): Provider[] {
    return [
      AuthGuard
    ];
  }
}
