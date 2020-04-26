import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class MesasService {
  constructor(private httpClient: HttpClient) {}

  public getMesas(): Observable<any> {
      return this.httpClient.get(url + "/mesa").pipe(map((res: any) => res));
  }
}