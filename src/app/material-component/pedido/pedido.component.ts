import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';

const pedidos: any = [
  {
    IdPedido: 1,
    Estado: 1,
    Observacion: "Undefined"
  }
]

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
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((res: any) => {
      this.productosSource = res;
    })

    this.pedidosSource = pedidos;
  }

  addPedido() {

  }

}
