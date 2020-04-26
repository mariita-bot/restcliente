export interface Mesa {
    IdMesa: number;
    Numero: number;
    Estado: number;
    Descripcion: string;
}

export interface Cargo {
    IdEmpleado: number;
    NombreEmpleado: string;
    Direccion: string;
    Cedula: string;
    Sexo: number;
    Estado: number;
}

export interface Categoria {
    IdCategoria: number;
    NombreCategoria: string;
}

export interface Cliente {
    IdCliente: number;
    NombreCliente: string;
    Direccion: string;
    Telefono: string;
    Cedula: string;
}

export interface Empleado {
    IdEmpleado: number;
    NombreEmpleado: string;
    Direccion: string;
    Cedula: string;
    Sexo: number;
    Estado: number;
}

export interface Pedido {
    IdPedido: number;
    Estado: number;
    Observacion: string;
}

export interface Pedidodetalle {
    IdPedidoDetalle: number;
    Subtotal: number;
    Cantidad: number;
    Fecha: Date;
}

export interface Producto {
    IdProducto: number;
    NombreProducto: string;
    PrecioVenta: number;
    Estado: number;
    Descripcion: string;
    Tamanio: number;
}

export interface Proveedor {
    IdProveedor: number;
    NombreProveedor: string;
    Direccion: string;
    Telefono: string;
}

export interface ProveeProducto {
    IdProveeProducto: number;
    Cantidad: number;
    Fecha: Date;
    PrecioEntrada: number;
}

export interface Reserva {
    IdReserva: number;
    Fecha: Date;
}

export interface StockProducto {
    IdStock: number;
    Cantidad: number;
    Fecha_Ingreso: Date;
    Precio_Entrada: number;
}

// Api format

export interface ApiFormat {
    success: boolean;
    data: any;
}
