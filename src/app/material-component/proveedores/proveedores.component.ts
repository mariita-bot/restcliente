import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/Imodels';

@Component({
  selector: 'app-menu',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  displayedColumns: string[] = ['IdProveedor', 'NombreProveedor', 'Direccion', 'Telefono'];
  productosSource: Proveedor[];

  constructor(
    private proveedoresService: ProveedorService 
  ) { }

  ngOnInit() {
    this.proveedoresService.getProveedores().subscribe((proveedors: Proveedor[]) => {
      this.productosSource = proveedors;
    });
  }
}


// Dialogo para agregar proveedor

@Component({
  selector: 'app-proveedor-add-proveedor',
  templateUrl: './proveedor-add-dialog.component.html',
  styleUrls: ['./proveedor-add-dialog.component.scss']
})
export class ProveedorAddDialog {
  constructor(
    public dialogRef: MatDialogRef<ProveedorAddDialog>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogDetalleData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
