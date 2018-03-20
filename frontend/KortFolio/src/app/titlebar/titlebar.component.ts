import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserinfoService } from '../service/userinfo.service'

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['../app.component.css']
})

export class TitlebarComponent implements OnInit {

  menuStatus : boolean = false;

  public tests : any;
  public test1 : object;

  constructor(private UserService : UserinfoService ) {

  }

  // getUserName() : void {
  //   this.UserService.getUserName().subscribe(data => {
  //                                   this.tests = data;
  //                                   console.log(this.tests);
  //                                 });
  // }

  ngOnInit() {
    //Http
    this.UserService.getUserName().subscribe( 
      data => {
        this.tests = data;
        console.log("data!! : " + data);
        console.log("tests!! : " + this.tests);
      },
      err => alert(err),
      () => console.log('success')
    );

    // //HttpClient
    // this.UserService.getUserNameC().subscribe( data => {
    //   this.test1 = data;
    //   console.log("HttpClientData : " + this.test1);
    // }, err => {
    //   console.log(err);
    // },()=>{
    //   console.log("HttpClientDataResult : " + this.test1);
    // });

    console.log('testing now!');
    console.log(this.tests);
    console.log(this.test1);
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

class UserModel{
  constructor(
    public _id : String,
    public _password : String,
    public  _email : String,
    public  _name : String
  ){};
}