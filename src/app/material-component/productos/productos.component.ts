import { Component } from '@angular/core';

export interface ProductoElement {
  IdProducto: number;
  NombreProducto: string;
  PrecioVenta: number;
  Estado: number;
  Descripcion: string;
}

const ELEMENT_DATA: ProductoElement[] = [
  {IdProducto: 1, NombreProducto: 'Coca 3LTS', PrecioVenta: 25, Estado: 1, Descripcion: "s"},
  {IdProducto: 2, NombreProducto: 'Coca 3LTS', PrecioVenta: 25, Estado: 1, Descripcion: "s"},
  {IdProducto: 3, NombreProducto: 'Coca 3LTS', PrecioVenta: 25, Estado: 1, Descripcion: "s"},
  {IdProducto: 4, NombreProducto: 'Coca 3LTS', PrecioVenta: 25, Estado: 1, Descripcion: "s"},
  {IdProducto: 5, NombreProducto: 'Coca 3LTS', PrecioVenta: 25, Estado: 1, Descripcion: "s"},
];

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  displayedColumns: string[] = ['IdProducto', 'NombreProducto', 'PrecioVenta', 'Estado', 'Descripcion'];
  productosSource = ELEMENT_DATA;
}
