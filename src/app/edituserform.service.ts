import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EdituserformService {
  result;
  constructor(private _http: Http) { }

     selecteduser(data){
       return this._http.get('/edituser/',data).map(result => this.result = result.json().data);
     }

}
