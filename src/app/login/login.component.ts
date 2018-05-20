import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { LoginformService } from '../loginform.service';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  constructor(private router: Router, private _login: LoginformService,private http: HttpClientModule) { }

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

    this._login.login(data).subscribe(response => this.formdata = response);
    this.router.navigate(['']);
 }
}
