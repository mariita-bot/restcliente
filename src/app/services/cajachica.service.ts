import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CajaChicaService {
  constructor(private httpClient: HttpClient) {}

  public getCajaChica(): Observable<any> {
    return this.httpClient.get(url + "/api/cajachica").pipe(map((res: any) => res));
  }

  public saveCajaChica(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/cajachica", formPost).pipe(map((res: any) => res));
  }
}
