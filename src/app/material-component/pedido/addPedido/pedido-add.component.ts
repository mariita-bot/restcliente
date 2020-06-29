import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../../services/producto.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { ProveeProductoService } from '../../../services/proveeproducto.service';

@Component({
  selector: 'app-pedido-add-pedido',
  templateUrl: './pedido-add-dialog.component.html',
  styleUrls: ['./pedido-add-dialog.component.scss']
})
export class PedidosAddDialog implements OnInit {
  displayedColumns: string[] = ['IdProducto', 'Cantidad']
  productoLlevar: any[] = [];

  addPedidoForm: FormGroup
  estadoProducto: true;
  proveedores: any;
  productos: any;


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PedidosAddDialog>,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private proveeProductoService: ProveeProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((res: any) => {
      this.productos = res;
    });

    this.addPedidoForm = this.formBuilder.group({
      IdProducto: [null, Validators.required],
      cantidadToBuy: [null],
      Observacion: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProductoToBuy() {

    const prod = this.productos.find((el: any) => el.IdProducto === this.addPedidoForm.value.IdProducto);

    const arr = [prod, ...this.productoLlevar];
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
