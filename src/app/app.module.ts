import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';


import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ListusersService } from './listusers.service';
import { AdduserformService} from './adduserform.service';
import { EdituserformService } from './edituserform.service';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

const appRoutes: Routes = [
   {
     path: '',
     component: UserlistComponent
  },
  {
    path: 'add-user',
    component: AdduserComponent
 },
 {
  path: 'edituser/:id',
  component: EdituserComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserlistComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ListusersService,AdduserformService,EdituserformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
