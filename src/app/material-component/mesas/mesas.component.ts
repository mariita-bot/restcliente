import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MesasService } from '../../services/mesas.service';
import { Mesa } from 'src/app/interfaces/Imodels';

export interface DialogDetalleData {
  noMesa: number;
  descripcion: string;
}

@Component({
  selector: 'app-buttons',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {
  
  Mesas: Mesa[];

  constructor(
    private mesasService: MesasService,
    public detalleDialog: MatDialog
  ) { }

  ngOnInit() {
    this.mesasService.getMesas().subscribe((mesas: Mesa[]) => {
      this.Mesas = mesas;
    });
  }

  mostrarMesaDetalle(noMesa: number, descripcion: string) {
    const detalleDialogRef = this.detalleDialog.open(MesaDetalleDialog, {
      width: '700px',
      height: '400px',
      data: {noMesa, descripcion}
    });

    detalleDialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

// Dialogo para mostrar los detalles de la mesa

@Component({
  selector: 'app-mesa-detalle-dialog',
  templateUrl: './mesa-detalle-dialog.component.html',
  styleUrls: ['./mesa-detalle-dialog.component.scss']
})
export class MesaDetalleDialog {
  constructor(
    public dialogRef: MatDialogRef<MesaDetalleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDetalleData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
