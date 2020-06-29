import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../services/producto.service';
import { ProductosAddDialog } from './addDialog/productos-add-dialog.component';
import { ProductosEditDialog } from './editDialog/productos-edit-dialog.component';
import { ProductosAddExistenciaDialog } from './addExistencia/producto-add-existencia.component';
import { ProveeProductoService } from 'src/app/services/proveeproducto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['IdProducto', 'NombreProducto', 'PrecioVenta', 'Estado', 'Descripcion', 'Cantidad', 'Tamanio', 'Opciones'];
  productosSource: any[];

  constructor(
    private productoService: ProductoService,
    private proveeProductoService: ProveeProductoService,
    private addProductoDiag: MatDialog,
    private editProductoDiag: MatDialog,
    private addExistenciaDiag: MatDialog
  ) {}

  ngOnInit() {
    this.updateProductos();
  }

  getCantidad(element: any): number {
    let cant = 0;
    element.forEach((e: any) => {
      cant += e.Cantidad;
    });
    return cant;
  }

  updateProductos() {
    this.productoService.getProductos().subscribe((res: any[]) => {
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
      this.updateProductos();
    });
  }
}
