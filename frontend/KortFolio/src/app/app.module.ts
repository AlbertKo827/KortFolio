import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
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

import { UserinfoService } from './service/userinfo.service';
import { TestComponent } from './test/test.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ContactResultComponent } from './contact-result/contact-result.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component'
import { PortfolioService } from './service/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitlebarComponent,
    CtrlSBBComponent,
    IntroduceComponent,
    RegisterComponent,
    ContactComponent,
    TestComponent,
    UserinfoComponent,
    ContactResultComponent,
    PortfolioComponent,
    PortfolioViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:IntroduceComponent
      },
      {
        path:'test',
        component:TestComponent
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
        path:'portfolio',
        component:PortfolioComponent
      },
      {
        path:'portfolio/:id',
        component:PortfolioViewComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'contact/result',
        component:ContactResultComponent
      },
      {
        path:'user/:id',
        component:UserinfoComponent
      },
      {
        path:'logincheck',
        component:TestComponent
      },
    ]),
    HttpModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    DropDown.forRoot(),
    Modal.forRoot(),
    ProgressBar.forRoot(),
  ],
  providers: [ 
    UserinfoService,
    PortfolioService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
