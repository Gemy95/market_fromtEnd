import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
   httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': ' */*'
    // ,'Authorization': 'my-auth-token'
      })};

  constructor(private httpClient:HttpClient) { }

  loginUser(userObj)
  {
  return this.httpClient.post(environment.API_URL+'login',userObj,this.httpOptions);
  }
  

}
