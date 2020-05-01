import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from '../screens/stats/stats.component';
import { MesasComponent } from '../screens/mesas/mesas.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'estadisticas', component: StatsComponent },
      { path : 'mesas' ,  component : MesasComponent }
    ]
  }
];
