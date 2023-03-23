import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private readonly PATH: string = "dishes";
  private readonly DISH_API: string = `http://localhost:3000/${this.PATH}`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.DISH_API);
  }
}
