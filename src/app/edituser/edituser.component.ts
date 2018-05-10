import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
  selectedusers: any;
  formdata;
  getuser;
  updateuser;
  constructor(private router: Router,private route: ActivatedRoute,private _edituserformService: EdituserformService) {

    
   }



  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    var userdata = this._edituserformService.selecteduser(id).subscribe((selectedusers:any) => this.selectedusers = selectedusers);
     console.log(id);
     console.log(userdata);

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

  getallval(data){
    //console.log(data);
    //console.log(data.name);
    let id = this.route.snapshot.paramMap.get('id');
    this._edituserformService.updateuser(data).subscribe(response => this.updateuser = response);
       this.router.navigate([''])
  }
}
