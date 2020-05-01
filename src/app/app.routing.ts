import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AppRoutes: Routes = [
  {
    path: '',
    //component: FullComponent,
    children: [
      
      /*{
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },*/
      {
        path: 'login',
        loadChildren: 
          () => import ('./login/login-screen/login-screen.module').then(m => m.LoginScreenModule )
      },
      /*{
        path: 'dashboard',
        component: FullComponent,
        children: [
          { path: '', component: DashboardComponent },
        ]
      }*/

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];