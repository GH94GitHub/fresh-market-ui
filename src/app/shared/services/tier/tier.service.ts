import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/constants';
import { Tier } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class TierService {

private readonly TIER_API: string = API.TIER_API;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tier[]> {
    return this.http.get<Tier[]>(this.TIER_API);
  }
}
