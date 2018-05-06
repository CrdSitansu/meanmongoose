import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { AdduserformService} from '../adduserform.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  formdata;
  adduser;
  constructor(private router: Router,private _adduserformService : AdduserformService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required        
     ]))
   });
  }
  onClickSubmit(data) {
    // alert(data.name);
    // alert(data.address);
    //console.log(data.name);
    
 
    this._adduserformService.adduser(data).subscribe(response => this.adduser = response);
    this.router.navigate([''])

  }
}
