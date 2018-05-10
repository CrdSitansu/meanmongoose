import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EdituserformService {
  result;
  formdata;
  name;
  address;
  constructor(private _http: Http) { }

     selecteduser(id){
       return this._http.get('/edituser/'+id).map(result => this.result = result.json().data);
     }
     updateuser(data){
      return this._http.put('/updateuser/'+data.id,{name: data.name, address: data.address});
     }
}
