import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ListusersService {
result;
  constructor(private _http:Http) { }

    getusers(){
      return this._http.get('/users').map(result => this.result = result.json().data);
    }
  

}
