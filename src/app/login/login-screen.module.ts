import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginScreenComponent } from './login-screen.component';
import { LoginRoutes } from './login-screen.routing'
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { DemoMaterialModule } from '../demo-material-module'

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatProgressSpinnerModule,
    RouterModule.forChild(LoginRoutes),
  ],
  declarations: [ LoginScreenComponent ]
})
export class LoginScreenModule { }
