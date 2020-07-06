import { Component, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../../services/producto.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { ProveeProductoService } from '../../../services/proveeproducto.service';
import { MesasService } from 'src/app/services/mesas.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-add-pedido',
  templateUrl: './pedido-add-dialog.component.html',
  styleUrls: ['./pedido-add-dialog.component.scss']
})
export class PedidosAddDialog implements OnInit {
  displayedColumns: string[] = ['NombreProducto', 'Cantidad']
  productoLlevar: any[] = [];

  addPedidoForm: FormGroup
  estadoProducto: true;
  proveedores: any[];
  productos: any[];
  mesas: any[];
  montoTotal: number = 0;

  hasRendered: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PedidosAddDialog>,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private proveeProductoService: ProveeProductoService,
    private mesaService: MesasService,
    private pedidoService: PedidoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit() {
    this.productoService.getProductos().subscribe((res: any) => {
      this.productos = res;
    });

    this.mesaService.getMesas().subscribe((res: any) => {
      this.mesas = res;
    });

    this.addPedidoForm = this.formBuilder.group({
      NumMesa: [null, Validators.required],
      Observacion: [null]
    });

    //document.getElementById("productSidenav").style.width = "250px";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCantidad(element: any): string {
    let cant = 0;
    element.forEach((e: any) => {
      cant += e.Cantidad;
    });
    return cant.toString();
  }

  limpiarTablaPedidos() {
    this.productoLlevar = [];
    this.montoTotal = 0;
  }

  addProductoToBuy(cant: HTMLInputElement, elementToBuy: any) {
    const prod = this.productos.find((el: any) => el.IdProducto == elementToBuy.IdProducto);

    const prodS = {
      Cantidad: cant.value,
      ...prod
    };

    // Agregar a tabla producto llevar
    this.productoLlevar.push(prodS);

    // Calcular total
    let total = 0;
    this.productoLlevar.forEach((e: any) => {
      total += (e.Cantidad * e.PrecioVenta);
    });

    // Render
    this.montoTotal = total;
    this.productoLlevar = this.productoLlevar.slice();
  }

  submit() {
    if(!this.addPedidoForm.valid){
      return;
    }

    this.productoLlevar.forEach((e: any) => {
      delete e.ProveeProductos;
    });

    const formData = {
      productos: this.productoLlevar,
      ...this.addPedidoForm.value
    };

    this.pedidoService.savePedido(formData).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
