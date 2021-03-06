import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import {HttpModule} from "@angular/http";
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ListusersService } from './listusers.service';
import { AdduserformService} from './adduserform.service';
import { EdituserformService } from './edituserform.service';
import { RegisterformService } from './registerform.service';

import { LoginformService } from './loginform.service';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

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
  path: 'register-user',
  component: RegistrationComponent
},
{
  path: 'login-user',
  component: LoginComponent
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
    EdituserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [ListusersService,AdduserformService,EdituserformService,RegisterformService,LoginformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
