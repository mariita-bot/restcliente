import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MesasComponent } from './mesas/mesas.component';
import { MesaDetalleDialog } from './mesas/mesadetalle/mesa-detalle-dialog.component';

import { PedidosComponent } from './pedido/pedido.component';
import { PedidosAddDialog } from './pedido/addPedido/pedido-add.component';
import {ProductosComponent } from './productos/productos.component';
import { ProductosAddDialog } from './productos/addDialog/productos-add-dialog.component';
import { ProductosEditDialog } from './productos/editDialog/productos-edit-dialog.component';
import { ProductosAddExistenciaDialog } from './productos/addExistencia/producto-add-existencia.component';
import {
  ProveedoresComponent,
  ProveedorAddDialog
} from './proveedores/proveedores.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { VerPedidoComponent } from './pedido/verPedido/verpedido.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    MesasComponent,
    MesaDetalleDialog,
    PedidosComponent,
    PedidosAddDialog,
    ProductosComponent,
    ProductosAddDialog,
    ProductosEditDialog,
    ProductosAddExistenciaDialog,
    ProveedoresComponent,
    ProveedorAddDialog,
    ReportesComponent,
    VerPedidoComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent
  ]
})
export class MaterialComponentsModule {}
