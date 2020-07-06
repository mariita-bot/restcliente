import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mesa-detalle-dialog',
  templateUrl: './mesa-detalle-dialog.component.html',
  styleUrls: ['./mesa-detalle-dialog.component.scss']
})
export class MesaDetalleDialog implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Subtotal']
  pedidoSource: any[];

  constructor(
    public dialogRef: MatDialogRef<MesaDetalleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const arr: any[] = [];

    this.data.pedidoMesa.forEach((e: any) => {
      arr.push(e.PedidoDetalles);
    });

    this.pedidoSource = arr;

    this.pedidoSource.forEach(e => console.log(e));
  }

  print(e: any) {
    console.log(e);
  }
}
