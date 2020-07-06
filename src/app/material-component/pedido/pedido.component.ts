import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';
import { PedidosAddDialog } from './addPedido/pedido-add.component';
import { VerPedidoComponent } from './verPedido/verpedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['IdPedido', 'MesaNumero', 'Estado', 'Observacion', 'Opciones' ];
  pedidosSource: any;
  productosSource: any;

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private addPedidoDialog: MatDialog,
    private verPedidoDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.updatePedidos();
  }

  updatePedidos() {
    this.pedidoService.getPedidos().subscribe((res: any) => {
      this.pedidosSource = res;
    })
  }

  facturarPedido(pedido: any) {

  }

  pagarPedido(pedido: any) {
    this.pedidoService.pagarPedido(pedido).subscribe((res: any) => {
      this.updatePedidos();
    });
  }

  verDetallesPedido(pedido: any) {
    const verPedido = this.verPedidoDialog.open(VerPedidoComponent, {
      width: '600px',
      height: '492px',
      data: pedido
    });

    verPedido.afterClosed().subscribe(result => {
      this.updatePedidos();
    });
  }

  addPedido() {
    const addPedidoRef = this.addPedidoDialog.open(PedidosAddDialog, {
      width: '600px',
      height: '492px',
      data: {}
    });

    addPedidoRef.afterClosed().subscribe(result => {
      this.updatePedidos();
    })
  }

}
