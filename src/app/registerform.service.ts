import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
@Injectable()
export class RegisterformService {

  constructor(private _http: Http) { }

  formdata;
  result;
  email;password;
  registration(data){
    console.log('service=' + data.email);
    console.log('service=' + data.password);
    let headers = new Headers();
    return this._http.post('/registration',{email:data.email,password:data.password},{
      headers: headers
     }).map(result=> this.result  = result.json().data)
  }
}
