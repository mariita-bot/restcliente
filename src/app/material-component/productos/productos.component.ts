import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/Imodels';
import { ProductosAddDialog } from './addDialog/productos-add-dialog.component';
import { ProductosEditDialog } from './editDialog/productos-edit-dialog.component';
import { ProductosAddExistenciaDialog } from './addExistencia/producto-add-existencia.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['IdProducto', 'NombreProducto', 'PrecioVenta', 'Estado', 'Descripcion', 'Tamanio', 'Opciones'];
  productosSource: Producto[];

  constructor(
    private productoService: ProductoService,
    private addProductoDiag: MatDialog,
    private editProductoDiag: MatDialog,
    private addExistenciaDiag: MatDialog
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
    const addProductoDiagRef = this.addProductoDiag.open(ProductosAddDialog, {
      width: '600px',
      height: '492px',
      data: {}
    });

    addProductoDiagRef.afterClosed().subscribe(result => {
      this.updateProductos();
    })
  }

  openEdit(producto: any) {
    const editProductoDiagRef = this.editProductoDiag.open(ProductosEditDialog, {
      width: '600px',
      height: '492px',
      data: producto
    });

    editProductoDiagRef.afterClosed().subscribe(result => {
      this.updateProductos();
    });
  }

  openAgregarExistencia(producto: any) {
    const addExistenciaDiagRef = this.addExistenciaDiag.open(ProductosAddExistenciaDialog, {
      width: '600px',
      height: '515px',
      data: producto
    });

    addExistenciaDiagRef.afterClosed().subscribe(result => {
      console.log("Add existencia dialog closed!");
    });
  }
}
