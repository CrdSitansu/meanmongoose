import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
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
      let headers = new Headers();
       console.log('Service=' + data.myFile);

       return this._http.post('/adduser',{name: data.name, address: data.address,filepath:data.myFile},{
        headers: headers
       }).map(result => this.result = result.json().data);
     }

}
