import { NgModule } from '@angular/core';
import { LoginScreenComponent } from './login-screen.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { FullModule } from 'src/app/layouts/full/full.module';
import { DemoMaterialModule } from 'src/app/demo-material-module';



@NgModule({
  //declarations: [ LoginScreenComponent ],
  imports: [
    FullModule,
    DemoMaterialModule,
    RouterModule.forChild(LoginRoutes),

  ]
})
export class LoginScreenModule { }
