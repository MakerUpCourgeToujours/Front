import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubType} from '../../models/subscrible';

@Injectable({
  providedIn: 'root'
})
export class SubtypeService {

  private apiurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  GetAll(): Observable<SubType[]> {
    return this.http.get<SubType[]>(`${this.apiurl}/SubType`);
  }

}
