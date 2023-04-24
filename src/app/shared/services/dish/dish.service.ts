import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API } from 'src/app/constants';
import { Dish } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private readonly DISH_API: string = API.DISH_API;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.DISH_API);
  }

  getById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.DISH_API}/${id}`);
  }
}
