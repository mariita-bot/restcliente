import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductoService } from '../../../services/producto.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { ProveeProductoService } from '../../../services/proveeproducto.service';

@Component({
  selector: 'app-producto-edit-producto',
  templateUrl: './productos-add-existencia-dialog.component.html',
  styleUrls: ['./productos-add-existencia-dialog.component.scss']
})
export class ProductosAddExistenciaDialog implements OnInit {
  addExistenciaProductoForm: FormGroup
  estadoProducto: true;
  proveedores: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProductosAddExistenciaDialog>,
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private proveeProductoService: ProveeProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.proveedorService.getProveedores().subscribe((res: any) => {
      this.proveedores = res;
    });

    this.addExistenciaProductoForm = this.formBuilder.group({
      IdProveedor: [null, Validators.required],
      Cantidad: [null, Validators.pattern("^[0-9]*$")],
      PrecioEntrada: [null, Validators.pattern("^[0-9]*$")],
      Observacion: [null, Validators.required],
      MontoTotal: [null, Validators.pattern("^[0-9]*$")]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if(!this.addExistenciaProductoForm.valid){
      return;
    }

    const IdProveedor = parseInt(this.addExistenciaProductoForm.value.IdProveedor);

    const formData = {
      IdProducto: this.data.IdProducto,
      ...this.addExistenciaProductoForm.value
    }

    formData.IdProveedor = IdProveedor;

    this.proveeProductoService.saveProveeProducto(formData).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
