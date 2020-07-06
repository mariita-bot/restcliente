import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verpedido',
  templateUrl: 'verpedido.component.html',
  styleUrls: ['verpedido.component.scss']
})
export class VerPedidoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Cantidad', 'Subtotal']

  constructor(
    private dialogRef: MatDialogRef<VerPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closebtn() {
    this.dialogRef.close();
  }

  ngOnInit() {

  }
}
