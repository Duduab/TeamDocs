import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  constructor(private http: HttpClient) { }

  public getTerms(): Observable<any> {
    return this.http.get("../../assets/terms.json")
  }
}
