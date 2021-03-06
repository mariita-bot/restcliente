import { Routes } from '@angular/router';

import { MesasComponent } from './mesas/mesas.component';
import { PedidosComponent } from './pedido/pedido.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ReportesComponent } from './reportes/reportes.component';

export const MaterialRoutes: Routes = [
  {
    path: 'mesas',
    component: MesasComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  // {
  //   path: 'tabs',
  //   component: TabsComponent
  // },
  // {
  //   path: 'stepper',
  //   component: StepperComponent
  // },
  // {
  //   path: 'expansion',
  //   component: ExpansionComponent
  // },
  // {
  //   path: 'chips',
  //   component: ChipsComponent
  // },
  // {
  //   path: 'toolbar',
  //   component: ToolbarComponent
  // },
  // {
  //   path: 'progress-snipper',
  //   component: ProgressSnipperComponent
  // },
  // {
  //   path: 'progress',
  //   component: ProgressComponent
  // },
  // {
  //   path: 'dialog',
  //   component: DialogComponent
  // },
  // {
  //   path: 'tooltip',
  //   component: TooltipComponent
  // },
  // {
  //   path: 'snackbar',
  //   component: SnackbarComponent
  // },
  // {
  //   path: 'slider',
  //   component: SliderComponent
  // },
  // {
  //   path: 'slide-toggle',
  //   component: SlideToggleComponent
  // }
];
