import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProveeProductoService {
  constructor(private httpClient: HttpClient) {}

  public getProveeProducto(): Observable<any> {
    return this.httpClient.get(url + "/api/proveeproducto").pipe(map((res: any) => res));
  }

  public saveProveeProducto(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/proveeproducto", formPost).pipe(map((res: any) => res));
  }
}
