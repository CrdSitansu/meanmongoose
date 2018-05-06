import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
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
  constructor(private router: Router,private route: ActivatedRoute,private _edituserformService: EdituserformService) {

    //this._edituserformService.selecteduser().subscribe(response => this.selectedusers = response);
   }



  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

   var userdata = this._edituserformService.selecteduser(id).subscribe(response => this.selectedusers = response);
    console.log(id);
    console.log(userdata);
  }

}
