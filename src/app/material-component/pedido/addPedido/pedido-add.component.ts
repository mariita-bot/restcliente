import { Component, OnInit, Inject, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../../services/producto.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { ProveeProductoService } from '../../../services/proveeproducto.service';
import { MesasService } from 'src/app/services/mesas.service';

@Component({
  selector: 'app-pedido-add-pedido',
  templateUrl: './pedido-add-dialog.component.html',
  styleUrls: ['./pedido-add-dialog.component.scss']
})
export class PedidosAddDialog implements OnInit, AfterViewChecked {
  displayedColumns: string[] = ['NombreProducto', 'Cantidad']
  productoLlevar: any[] = [];

  addPedidoForm: FormGroup
  estadoProducto: true;
  proveedores: any[];
  productos: any[];
  mesas: any[];

  hasRendered: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PedidosAddDialog>,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private proveeProductoService: ProveeProductoService,
    private mesaService: MesasService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngAfterViewChecked() {
    // if(this.hasRendered){
    //   document.getElementById("productSidenav").style.width = "250px";
    //   this.hasRendered = true;
    // }
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe((res: any) => {
      this.productos = res;
    });

    this.mesaService.getMesas().subscribe((res: any) => {
      this.mesas = res;
    });

    this.addPedidoForm = this.formBuilder.group({
      NumMesa: [null, Validators.required],
      IdProducto: [null, Validators.required],
      cantidadToBuy: [null],
      Observacion: [null]
    });

    //document.getElementById("productSidenav").style.width = "250px";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProductoToBuy() {
    const prod = this.productos.find((el: any) => el.IdProducto == parseInt(this.addPedidoForm.value.IdProducto));

    const prodS = {
      Cantidad: this.addPedidoForm.value.cantidadToBuy,
      ...prod
    };

    this.productoLlevar.push(prodS);
    this.productoLlevar = this.productoLlevar.slice();

    this.calcularTotal();
  }

  /**
   * Metodo que calcula el total de productos a llevar
   */
  calcularTotal() {
    console.log(this.productoLlevar);
  }

  submit() {
    // if(!this.addExistenciaProductoForm.valid){
    //   return;
    // }

    // const IdProveedor = parseInt(this.addExistenciaProductoForm.value.IdProveedor);

    // const formData = {
    //   IdProducto: this.data.IdProducto,
    //   ...this.addExistenciaProductoForm.value
    // }

    // formData.IdProveedor = IdProveedor;

    // this.proveeProductoService.saveProveeProducto(formData).subscribe((res: any) => {
    //   if(res){
    //     this.dialogRef.close();
    //   }
    // });
  }
}
