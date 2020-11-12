import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env_ from '../../environments/environment'
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user: UserModel) {
    return this.http.post(`${env_.environment.serverUrl}/createUser`, user)
  }
}
