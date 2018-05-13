import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Router} from '@angular/router';
import {FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { AdduserformService} from '../adduserform.service';

//const uri = 'http://localhost:3000/adduser' ;

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  formdata;
  adduser;

  //uploader : FileUploader = new FileUploader({url:uri});
  constructor(private router: Router,private _adduserformService : AdduserformService,private http: HttpClientModule) {

        

   }

  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required        
     ])),
     uploader: new FormControl("", Validators.compose([
      Validators.required        
   ]))
   });
  }
 
myFile:File = null;
fileChange(event){
  this.myFile = event.target.files[0];
  alert(this.myFile.name);
console.log(event);
}
  onClickSubmit(data) {
     //alert(data.uploader);
    // alert(data.address);
    //console.log(data.uploader);
    
    data.append('image',this.myFile, this.myFile.name);
    alert(data);
     this._adduserformService.adduser(data).subscribe(response => this.adduser = response);
    this.router.navigate([''])
    }
  
}
