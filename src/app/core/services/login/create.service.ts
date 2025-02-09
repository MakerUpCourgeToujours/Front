import { Injectable } from '@angular/core';
import {environment} from '../../../environment/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {DecodeJwtTokenResponse} from '../../models/JwtToken';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MangeurCreate} from '../../models/mangeurCreate';
import {newPartenaire} from '../../models/Partenaire';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private apiurl = environment.apiUrl;


  constructor(private readonly http: HttpClient , private readonly _router: Router) { }


  addMangeur(newmangeur: MangeurCreate): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/User/B2CUser`, newmangeur)
  }

  addpartenaire(newpartenaire:newPartenaire): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/User/B2BUser`, newpartenaire)

  }


}
