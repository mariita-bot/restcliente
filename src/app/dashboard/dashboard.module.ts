import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { FullModule } from '../layouts/full/full.module';
import { SpinnerComponent } from '../shared/spinner.component';
import { StatsComponent } from '../screens/stats/stats.component';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FullModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [ DashboardComponent , SpinnerComponent, StatsComponent ] 
})
export class DashboardModule {}
