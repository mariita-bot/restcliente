import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-edit-producto',
  templateUrl: './productos-edit-dialog.component.html',
  styleUrls: ['./productos-edit-dialog.component.scss']
})
export class ProductosEditDialog implements OnInit {
  editProductoForm: FormGroup
  estadoProducto: true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductosEditDialog>,
    private productoService: ProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const productoEstado = this.data.Estado === 1 ? true : false;

    this.editProductoForm = this.formBuilder.group({
      NombreProducto: [this.data.NombreProducto, Validators.required],
      PrecioVenta: [this.data.PrecioVenta, Validators.pattern("^[0-9]*$")],
      Estado: [productoEstado, Validators.required],
      Descripcion: [this.data.Descripcion, Validators.required],
      Tamanio: [this.data.Tamanio, Validators.pattern("^[0-9]*$")]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if(!this.editProductoForm.valid){
      return;
    }

    const productoData = {
      IdProducto: this.data.IdProducto,
      ...this.editProductoForm.value
    }

    this.productoService.updateProducto(productoData).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
