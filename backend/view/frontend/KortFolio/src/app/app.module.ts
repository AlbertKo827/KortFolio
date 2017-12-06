import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
