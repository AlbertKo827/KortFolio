import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { CtrlSBBComponent } from './ctrl-sbb/ctrl-sbb.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { RegisterComponent } from './register/register.component';

import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule as DropDown } from 'ngx-bootstrap/dropdown';
import { ModalModule as Modal } from 'ngx-bootstrap/modal';
import { ProgressbarModule as ProgressBar } from 'ngx-bootstrap/progressbar';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitlebarComponent,
    CtrlSBBComponent,
    IntroduceComponent,
    RegisterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:IntroduceComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'contact',
        component:ContactComponent
      }
    ]),
    AlertModule.forRoot(),
    DropDown.forRoot(),
    Modal.forRoot(),
    ProgressBar.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
