import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Router, ɵROUTER_PROVIDERS} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserinfoService, UserModel } from '../service/userinfo.service'

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['../app.component.css'],
  providers :[ ɵROUTER_PROVIDERS ]
})

export class TitlebarComponent implements OnInit {

  menuStatus : boolean = false;
  userInfoUrl : String;
  userdata : UserModel;
  test = "HEllo";
regOlogout = {
  url : "register",
  name : "Register",
  display : "none"
}

  constructor(private UserService : UserinfoService, private router : Router ) {

  }

  ngOnInit() {
    this.UserService.getUserSelf().subscribe( 
      data => {
        this.userdata = data;
        if(this.userdata === undefined){
          console.log('undefined!!!!');
        } else{
          if(this.userdata.user_json._name == "Login"){
            this.userInfoUrl = "login";
            // elements.setAttribute("style","display:block;");
            this.regOlogout.url = "register";
            this.regOlogout.name = "Register";
            this.regOlogout.display = "none";
          }else{
            this.userInfoUrl = "user/" + this.userdata.user_json._index;
            // elements.setAttribute("style","display:none;");
            this.regOlogout.url = "logout";
            this.regOlogout.name = "Logout";
            this.regOlogout.display = "block";
          }
          
          
        }
      },
      err => console.log(err),
      () => console.log('success')
    );

    console.log("tests!! : " + this.userdata.user_json._name);
}

// ngAfterViewInit(){
//   var elements : HTMLElement = document.getElementById("registers");
//   console.log(elements);

//   var element = document.getElementById("menu");
//   element.setAttribute("style", "color : red;")
//   // if(this.userdata.user_json._name == "Login"){
//   //   elements.setAttribute("style","display:block;");
//   // }else{
//   //   elements.setAttribute("style","display:none;");
//   // }

//   // elements.setAttribute("style","display:none;");
//   this.UserService.getUserSelf().subscribe( 
//     data => {
//       this.userdata = data;
//       if(this.userdata === undefined){
//         console.log('undefined!!!!');
//       } else{
//         if(this.userdata.user_json._name == "Login"){
//           this.userInfoUrl = "login";
//           elements.setAttribute("style","display:block;");
//         }else{
//           this.userInfoUrl = "user/" + this.userdata.user_json._index;
//           elements.setAttribute("style","display:none;");
//         }
        
//         console.log("data!! : " + data);
//         console.log("tests!! : " + this.userdata.user_json._name);
//       }
//     },
//     err => console.log(err),
//     () => console.log('success')
//   );
// }

  ///test
  openMenu(){
    this.menuStatus = !this.menuStatus;

    var element = document.getElementById("menu");

    if(this.menuStatus)
      element.setAttribute("style","display:block;");
    else
      element.setAttribute("style","display:none;");
  }
  

  click_portfolio(){
    console.log("ok!! click!");

    if(this.userdata.user_json._name == "Login"){
      alert("로그인 후 관람이 가능합니다.");
      this.router.navigate(['/']);
    }
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