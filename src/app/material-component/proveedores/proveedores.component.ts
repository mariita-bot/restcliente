import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/Imodels';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  displayedColumns: string[] = ['IdProveedor', 'NombreProveedor', 'Direccion', 'Telefono', 'Opciones'];
  proveedoresSource: Proveedor[];

  constructor(
    private proveedoresService: ProveedorService,
    private addProveedorDiag: MatDialog
  ) { }

  ngOnInit() {
    this.updateProveedores();
  }

  updateProveedores() {
    this.proveedoresService.getProveedores().subscribe((proveedors: Proveedor[]) => {
      this.proveedoresSource = proveedors;
    });
  }

  addProveedor() {
    const addProveedorDiagRef = this.addProveedorDiag.open(ProveedorAddDialog, {
      width: '600px',
      height: '400px',
      data: {}
    });

    addProveedorDiagRef.afterClosed().subscribe(result => {
      this.updateProveedores();
    })
  }
}


// Dialogo para agregar proveedor

interface DialogAddProveedorData {
  NombreProveedor: string,
  Direccion: string,
  Telefono: string
}

@Component({
  selector: 'app-proveedor-add-proveedor',
  templateUrl: './proveedor-add-dialog.component.html',
  styleUrls: ['./proveedor-add-dialog.component.scss']
})
export class ProveedorAddDialog implements OnInit {
  addProveedorForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private proveedoresService: ProveedorService,
    public dialogRef: MatDialogRef<ProveedorAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogAddProveedorData
  ) {}

  ngOnInit() {
    this.addProveedorForm = this.formBuilder.group({
      NombreProveedor: [null, Validators.required],
      Direccion: [null, Validators.required],
      Telefono: [null, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if(!this.addProveedorForm.valid){
      return;
    }
    this.proveedoresService.saveProveedor(this.addProveedorForm.value).subscribe((res: any) => {
      if(res){
        this.dialogRef.close();
      }
    });
  }
}
