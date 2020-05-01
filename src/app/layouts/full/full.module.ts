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
import { FullRoutes } from './full.routing';


@NgModule({
  declarations: [
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(FullRoutes)

  ],
  exports : [
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent
  ],
})
export class FullModule { }
