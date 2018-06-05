import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginformService {
result;
email;password;
  constructor(private _http: Http) { }

  login(data){
    let headers = new Headers();
    return this._http.post('/logedin',{email:data.email,password:data.password},
    {headers: headers}
  ).map(result => this.result = result.json().data);
  }

}
