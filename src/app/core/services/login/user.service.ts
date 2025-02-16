import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';
import {UserB2B} from '../../models/User';
import {Observable} from 'rxjs';
import {MangeurCreate} from '../../models/mangeurCreate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getB2BById(id:number): Observable<UserB2B> {
     return this.http.get<UserB2B>(`${this.apiurl}/User/GetByIdB2B/${id}`);

  }

  getAllB2B(): Observable<UserB2B[]> {
    return this.http.get<UserB2B[]>(`${this.apiurl}/User/GetAllUsersB2B`);
  }


  getAllB2C():Observable<MangeurCreate[]> {
    return this.http.get<MangeurCreate[]>(`${this.apiurl}/User/GetAllUsersB2C`);
  }

}
