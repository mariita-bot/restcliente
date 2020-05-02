import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {DemoMaterialModule } from '../../demo-material-module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppHeaderComponent } from '../../layouts/full/header/header.component';
import { AppSidebarComponent } from '../../layouts/full/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    SharedModule,

  ],
  exports : [
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent
  ],
})
export class FullModule { }
