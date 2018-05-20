import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { RegisterformService } from '../registerform.service';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formdata;
  
  
  constructor(private router: Router, private _register: RegisterformService,private http: HttpClientModule) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
     ]))
   });
  }
  onClickSubmit(data) {
    console.log('component=' + data.email);
    console.log('component=' + data.password);

    this._register.registration(data).subscribe(response => this.formdata = response);
    this.router.navigate(['login-user']);
 }
}
  


