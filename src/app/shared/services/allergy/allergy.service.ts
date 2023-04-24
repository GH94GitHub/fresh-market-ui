import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private readonly ALLERGY_API: string = API.ALLERGY_API;

  constructor(private http: HttpClient) { }

  public getAllergies(): Observable<any> {
    return this.http.get(this.ALLERGY_API);
  }
}
