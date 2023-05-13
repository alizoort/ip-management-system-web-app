import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
import { InterceptorsModule } from '../interceptors/interceptors.module';
import { GuardsModule } from '../guards/guards.module';
import { ServicesModule } from '../services/services.module';
import { AppService } from '../../services/app.service';



@NgModule({
  declarations: [],
  imports: [CommonModule,
    FormioModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [
    CommonModule,
    FormioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        InterceptorsModule.forShared(),
        GuardsModule.forShared(),
        ServicesModule.forShared()
      ]
    };
  }
}

