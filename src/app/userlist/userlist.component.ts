import { Component, OnInit } from '@angular/core';

import { ListusersService } from '../listusers.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Array<any>;
  constructor(private _dataService: ListusersService) {
    this._dataService.getusers().subscribe(response => this.users = response);
   }
    
  ngOnInit() {
  }

}
