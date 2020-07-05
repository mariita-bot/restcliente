import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  constructor(private httpClient: HttpClient) {}

  public getReporte(): Observable<any> {
    return this.httpClient.get(url + "/api/reportes/pdf", { responseType: 'blob'});
  }

}
