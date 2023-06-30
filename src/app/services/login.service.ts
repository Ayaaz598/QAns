import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  baseURL="http://localhost:4200/login";
  public userRegistration(user:User):Observable<object>{
    return this.http.post(`$(this.baseURL)`,user);
   }
}
