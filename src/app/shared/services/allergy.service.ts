import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  private readonly PATH: string = "allergies";
  private readonly ALLERGY_API: string = `http://localhost:3000/${this.PATH}`;

  constructor(private http: HttpClient) { }

  public getAllergies(): Observable<any> {
    return this.http.get(this.ALLERGY_API);
  }
}
