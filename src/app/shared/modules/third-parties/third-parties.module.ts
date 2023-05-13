
import { NgModule, Provider } from '@angular/core';
import { MaterialModule } from '../material/material.module';


@NgModule({
    imports: [],
    exports: [
        MaterialModule,
    ],
    providers: []
})
export class ThirdPartiesModule {
    static forServices(): Provider[] {
        return [
            MaterialModule.forServices(),   
        ];
    }
}

