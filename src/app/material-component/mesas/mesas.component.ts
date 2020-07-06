import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MesasService } from '../../services/mesas.service';
import { Mesa } from 'src/app/interfaces/Imodels';
import { PedidoService } from 'src/app/services/pedido.service';
import { MesaDetalleDialog } from './mesadetalle/mesa-detalle-dialog.component';
import { VerPedidoComponent } from '../pedido/verPedido/verpedido.component';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  Mesas: Mesa[];
  Pedidos: any[];

  constructor(
    private mesasService: MesasService,
    private pedidoService: PedidoService,
    public detalleDialog: MatDialog
  ) { }

  ngOnInit() {
    this.mesasService.getMesas().subscribe((mesas: Mesa[]) => {
      this.Mesas = mesas;
    });

    this.pedidoService.getPedidos().subscribe((res: any) => {
      this.Pedidos = res;
    });
  }

  mostrarMesaDetalle(noMesa: number, descripcion: string) {
    const pedidoMesa = this.Pedidos.filter((el: any) => el.MesaNumero === noMesa);

    const verpedidodetalle = this.detalleDialog.open(MesaDetalleDialog, {
      width: '600px',
      height: '492px',
      data: {noMesa, pedidoMesa}
    });

    // const detalleDialogRef = this.detalleDialog.open(MesaDetalleDialog, {
    //   width: '600px',
    //   height: '492px',
    //   data: {noMesa, descripcion, pedidoMesa}
    // });

    verpedidodetalle.afterClosed().subscribe(result => {

    });
  }
}
