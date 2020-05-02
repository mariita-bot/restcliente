import { NgModule } from '@angular/core';
import { LoginScreenComponent } from './login-screen.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { FullModule } from 'src/app/layouts/full/full.module';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ LoginScreenComponent ],
  imports: [
    FullModule,
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(LoginRoutes),
    
  ]
})
export class LoginScreenModule { }
