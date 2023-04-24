import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/constants';
import { User } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly userApi: string = API.USER_API;

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    console.log("userService", "#registerUser()", user);
    return this.http.post<User>(this.userApi, user);
  }
}
