import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { FormGroup,  Validators} from '@angular/forms';
import { EdituserformService } from '../edituserform.service';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  selectedusers;
  formdata;
  constructor(private router: Router,private route: ActivatedRoute,private _edituserformService: EdituserformService) {

    //this._edituserformService.selecteduser().subscribe(response => this.selectedusers = response);
   }



  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

   this._edituserformService.selecteduser(id).subscribe(response => this.selectedusers = response);
    // console.log(id);
    // console.log(userdata);

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
