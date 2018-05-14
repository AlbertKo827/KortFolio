import { Component, OnInit } from '@angular/core';
import { TitlebarComponent } from '../titlebar/titlebar.component';

import { UserinfoService } from '../service/userinfo.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactComponent implements OnInit {
  name : String = "";
  email : String = "";
  constructor( private UserService : UserinfoService) { }

  ngOnInit() {
    this.UserService.getUserSelf().subscribe( 
      data => {
        this.name = data.user_json._name;
        this.email = data.user_json._email;
      },
      err => console.log(err),
      () => console.log('success')
    );
  }

}
