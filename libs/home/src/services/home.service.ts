import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../apps/client/src/environments/environment";
import {UserInstance} from "@ets/home/src/models";

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(environment.userList).map((res: {count: number, data: UserInstance[]}) => res.data);
  }
}
