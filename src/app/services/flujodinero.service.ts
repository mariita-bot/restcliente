import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FlujoDineroService {
  constructor(private httpClient: HttpClient) {}

  public getFlujoDinero(): Observable<any> {
    return this.httpClient.get(url + "/api/flujodinero").pipe(map((res: any) => res));
  }

  public saveFlujoDinero(formPost: any): Observable<any> {
    return this.httpClient.post(url + "/api/flujodinero", formPost).pipe(map((res: any) => res));
  }
}
