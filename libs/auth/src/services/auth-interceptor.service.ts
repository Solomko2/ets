import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {JwtService} from "@ets/auth/src/services/jwt.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.jwtService.getToken())
    });
    return next.handle(authReq);
  }

}
