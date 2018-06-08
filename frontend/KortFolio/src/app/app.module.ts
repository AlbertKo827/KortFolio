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

import { CookieService } from 'ngx-cookie-service'
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
import { LogincheckComponent } from './logincheck/logincheck.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterDirective } from './footer.directive';
import { FeedbackService } from './service/feedback.service';
import { ResultpageComponent } from './resultpage/resultpage.component';

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
    LogincheckComponent,
    FeedbackComponent,
    FooterDirective,
    ResultpageComponent,
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
        component:LogincheckComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'api/feedback',
        component:ResultpageComponent
      }
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
    PortfolioService,
    FeedbackService,
    CookieService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
