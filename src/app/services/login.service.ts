import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { url } from '../utils/url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public postLogin(formData: any): Observable<any> {
    console.log(formData)
    return this.httpClient.post(url + "/auth/login", formData).pipe(map((res: any) => res));
  }
}
