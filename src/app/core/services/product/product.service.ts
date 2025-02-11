import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubType} from '../../models/subscrible';
import {Products} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiurl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  GetAll(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiurl}/Product`);
  }

  GetbyId(id: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiurl}/Product/id/${id}`);
  }



}
