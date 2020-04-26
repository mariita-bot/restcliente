import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ProveedorService {
  constructor(private httpClient: HttpClient) {}

  public getProveedores(): Observable<any> {
      return this.httpClient.get(url + "/proveedor").pipe(map((res: any) => res));
  }

  // return this.http.get(url + "/proveedor",{})

//   public postProveedor(): any {
//       this.httpClient.post()
//   }
}