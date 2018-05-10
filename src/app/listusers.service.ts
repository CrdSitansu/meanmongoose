import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ListusersService {
result;
removersult;
  constructor(private _http:Http) { }

    getusers(){
      return this._http.get('/users').map(result => this.result = result.json().data);
    }
    deletuserlist(userId){
      //alert('Service' + userId);
      return this._http.delete('/deleted/'+userId).map(removersult => this.removersult = removersult.json().data);
    }

}
