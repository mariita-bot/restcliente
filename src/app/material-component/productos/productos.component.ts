import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/Imodels';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['IdProducto', 'NombreProducto', 'PrecioVenta', 'Estado', 'Descripcion', 'Tamanio'];
  productosSource: Producto[];

  constructor(
    private productoService: ProductoService,
    private addProductoDiag: MatDialog
  ) {}

  ngOnInit() {
    this.updateProductos();
  }

  updateProductos() {
    this.productoService.getProductos().subscribe((res: Producto[]) => {
      this.productosSource = res;
    });
  }

  addProducto() {
    const addProveedorDiagRef = this.addProductoDiag.open(ProductosAddDialog, {
      width: '600px',
      height: '492px',
      data: {}
    });

    addProveedorDiagRef.afterClosed().subscribe(result => {
      this.updateProductos();
    })
  }
}


// Dialogo para agregar proveedor

@Component({
  selector: 'app-producto-add-producto',
  templateUrl: './productos-add-dialog.component.html',
  styleUrls: ['./productos-add-dialog.component.scss']
})
export class ProductosAddDialog implements OnInit {
  addProductoForm: FormGroup
  estadoProducto: true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductosAddDialog>,
    private productoService: ProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.addProductoForm = this.formBuilder.group({
      NombreProducto: [null, Validators.required],
      PrecioVenta: [null, Validators.pattern("^[0-9]*$")],
      Estado: [true, Validators.required],
      Descripcion: [null, Validators.required],
      Tamanio: [null, Validators.pattern("^[0-9]*$")]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if(!this.addProductoForm.valid){
      return;
    }
    this.productoService.saveProducto(this.addProductoForm.value).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
