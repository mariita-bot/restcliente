import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private httpClient: HttpClient) {}

  public getPedidos(): Observable<any> {
    return this.httpClient.get(url + "/api/pedido").pipe(map((res: any) => res));
  }

  public pagarPedido(pedido: any): Observable<any> {
    return this.httpClient.post(url + "/api/pedido/pagarPedido", pedido, {responseType: 'blob'}).pipe(map((res: any) => res));
  }

  public getPedidoPorMesa(num: number): Observable<any> {
    return this.httpClient.get(url + '/api/pedido/'+num).pipe(map((res: any) => res));
  }

  public savePedido(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/pedido", formPost).pipe(map((res: any) => res));
  }

  public facturarPedido(pedido: any): Observable<any> {
    return this.httpClient.get(url + "/api/pedido/facturapedido", {responseType: 'blob'}).pipe(map((res: any) => res));
  }
}
