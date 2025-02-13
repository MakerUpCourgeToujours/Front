import {Injectable, signal} from '@angular/core';
import {environment} from '../../../environment/environment';
import {HttpClient} from '@angular/common/http';
import {loginUser, User} from '../../models/User';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Router} from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import {DecodeJwtTokenResponse} from '../../models/JwtToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiurl = environment.apiUrl;
  _currentUser$: BehaviorSubject<DecodeJwtTokenResponse | undefined>;

  //contructor
  user = signal<User | null| undefined>(undefined)
  constructor(private http: HttpClient , private readonly _router: Router,
              )
  {
    const jsonUser = localStorage.getItem('currentUser');
    if (jsonUser) {
      const userToken: DecodeJwtTokenResponse = JSON.parse(jsonUser);
      this._currentUser$ = new BehaviorSubject<DecodeJwtTokenResponse | undefined>(userToken);
    } else {
      this._currentUser$ = new BehaviorSubject<DecodeJwtTokenResponse | undefined>(undefined);
    }

  }

  //prendre le token

  getJwtToken(): string | null {
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
      // const userToken: User = JSON.parse(currentUser);
      // return userToken.token; // Assurez-vous que le modèle DecodeJwtTokenResponse possède une propriété 'token'
      return currentUser;
    }
    return null;
  }



  decodeToken(): DecodeJwtTokenResponse | null {
    const token = this.getJwtToken();
    //console.log('Token à décoder:', token);

    if (!token) return null;

    try {
      const decoded = jwtDecode(token); // Sans le type générique pour le test
      //console.log('Token décodé:', decoded);
      return decoded as DecodeJwtTokenResponse;
    } catch (error) {
      console.error('Erreur lors du décodage du token JWT:', error);
      return null;
    }
  }



  login(loginuser : loginUser): Observable<User> {
    return this.http.post(`${this.apiurl}/User/Login`, loginuser).pipe(
      tap((result : any)=>{
        localStorage.setItem('token', result['token']);

      })

    )
  }
  logout() {
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token");
        this._router.navigate(["/login"])
  }




}
