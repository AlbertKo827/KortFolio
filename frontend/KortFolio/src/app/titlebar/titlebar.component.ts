import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserinfoService, UserModel, TestModel } from '../service/userinfo.service'

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['../app.component.css']
})

export class TitlebarComponent implements OnInit {

  menuStatus : boolean = false;

  public tests : UserModel;

  constructor(private UserService : UserinfoService ) {

  }

  ngOnInit() {
    //Http
    this.UserService.getUserSelf().subscribe( 
      data => {
        this.tests = data;
        if(this.tests === undefined){
          console.log('undefined!!!!');
        } else{
          console.log("data!! : " + data);
          console.log("tests!! : " + this.tests.user_json._name);
        }
      },
      err => console.log(err),
      () => console.log('success')
    );
}

  ///test
  openMenu(){
    this.menuStatus = !this.menuStatus;

    var element = document.getElementById("menu");

    if(this.menuStatus)
      element.setAttribute("style","display:block;");
    else
      element.setAttribute("style","display:none;");
  }
/*
  Modal

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }*/
}