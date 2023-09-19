import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalEvents } from '../Models/HistoricalEvents';
import { Holidays } from '../Models/Holidays';
import { Country } from '../Models/Country';
import { LoginUser } from '../Auth/LoginUser';
import { AuthenticatedResponse } from '../Auth/AuthenticatedResponse';
import { userSignUp } from '../Auth/userSignUp';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  private baseUrlCountry: string = 'https://culturatour.bsite.net/api';
  private baseUrlHistoricalEvents: string = 'https://culturatour.bsite.net/api/HistoricalEvents?country=';

  constructor(private _http: HttpClient) {}

  private getToken(): string | null {
    return localStorage.getItem('jwt'); // Asegúrate de que 'jwt' sea la clave correcta
  }

  // Método para realizar una solicitud HTTP con el token en las cabeceras
  private getRequestHeaders(): HttpHeaders {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Agrega el token aquí
    });
    return headers;
  }

  // historial events Api Request.
  GetHistoricalEvents(TestClientRequest: string): Observable<HistoricalEvents> {
    const historicalEventUrl: string = `${this.baseUrlHistoricalEvents}${TestClientRequest}`;
    const headers = this.getRequestHeaders();
    return this._http.get<HistoricalEvents>(historicalEventUrl, { headers: headers });
  }

  // Country
  gerCountryData(country: string): Observable<Country> {
    const countryUrl: string = `${this.baseUrlCountry}/Country?country=${country}`;
    const headers = this.getRequestHeaders();
    return this._http.get<Country>(countryUrl, { headers: headers });
  }

  getMuseumsInCanada(place: string): Observable<any> {
    const url = 'https://google.serper.dev/places';

    const headers = new HttpHeaders({
      'X-API-KEY': '6ae0fd4126a2af27dd1062b220309f202ad6a7c5',
      'Content-Type': 'application/json',
    });

    const body = {
      q: `museum ${place}`,
    };

    return this._http.post(url, body, { headers });
  }

  userCredentials: LoginUser = { id: 0, emailLogin: '', passwordLogin: '' };

  // Login
  login(EmailLogin: string, PasswordLogin: string) {
    this.userCredentials.emailLogin = EmailLogin;
    this.userCredentials.passwordLogin = PasswordLogin;

    return this._http.post<AuthenticatedResponse>(
      'https://culturatour.bsite.net/api/Login',
      this.userCredentials,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  userSignUpCredentials: userSignUp = { id: 0, nombre: '', apellido: '', emailSignUp: '', passwordSignUp: '' };
  // Sign Up
  signUp(nombre: string, apellido: string, emailSignUp: string, passwordSignUp: string){
    this.userSignUpCredentials.nombre = nombre;
    this.userSignUpCredentials.apellido = apellido;
    this.userSignUpCredentials.emailSignUp = emailSignUp;
    this.userSignUpCredentials.passwordSignUp = passwordSignUp;

    return this._http.post<boolean>('https://culturatour.bsite.net/api/SignUp', this.userSignUpCredentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })
  }
}
