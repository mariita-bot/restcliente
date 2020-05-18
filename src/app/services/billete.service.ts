import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BilleteService {
  constructor(private httpClient: HttpClient) {}

  public getBillete(): Observable<any> {
    return this.httpClient.get(url + "/api/billete").pipe(map((res: any) => res));
  }

  public saveBillete(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/billete", formPost).pipe(map((res: any) => res));
  }
}
