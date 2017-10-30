import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../apps/client/src/environments/environment";

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(environment.userList);
  }
}
