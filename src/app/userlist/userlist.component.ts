import { Component, OnInit } from '@angular/core';

import { ListusersService } from '../listusers.service';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Array<any>;
  removeuser;
  constructor(private _dataService: ListusersService,private router: Router,private route: ActivatedRoute) {
    this._dataService.getusers().subscribe(response => this.users = response);
   }
    
  ngOnInit() {
  }
  deletUser(userId){
    //alert('component' + userId);
    this._dataService.deletuserlist(userId).subscribe(response => this.removeuser = response);
      this.router.navigate([''])
   
  }

}
