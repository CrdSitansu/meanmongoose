import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AdduserformService {
  formdata;
  result;
  name;
  address;
  filepath;


  constructor(private _http: Http) { }

     adduser(data){
       return this._http.post('/adduser',{name: data.name, address: data.address,filepath:data.uploader})
     }

}
