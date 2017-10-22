import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../apps/client/src/environments/environment';
import {Authenticate} from '../models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public signIn(req: Authenticate): Observable<any> {
    return this.http.post(environment.signIn, req);
  }
}
