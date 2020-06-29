import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';
import { PedidosAddDialog } from './addPedido/pedido-add.component';

const pedidos: any = [
  {
    IdPedido: 1,
    Estado: 1,
    Observacion: "Undefined"
  }
];

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['IdPedido', 'Estado', 'Observacion' ];
  pedidosSource: any;
  productosSource: any;

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private addPedidoDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.updatePedidos();
  }

  updatePedidos() {
    this.pedidoService.getPedidos().subscribe((res: any) => {
      this.pedidosSource = res;
    })
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
