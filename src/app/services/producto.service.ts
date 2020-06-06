import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private httpClient: HttpClient) {}

  public getProductos(): Observable<any> {
    return this.httpClient.get(url + "/api/producto").pipe(map((res: any) => res));
  }

  public saveProducto(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/producto", formPost).pipe(map((res: any) => res));
  }

  public updateProducto(formPost: any): Observable<any> {
    return this.httpClient.put(url + "/api/producto", formPost).pipe(map((res: any) => res));
  }
}
