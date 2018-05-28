import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincheck',
  templateUrl: './logincheck.component.html',
  styleUrls: ['./logincheck.component.css']
})
export class LogincheckComponent implements OnInit {

  constructor( private UserService : UserinfoService, private router : Router) { }

  ngOnInit() {
    this.UserService.getUserSelf().subscribe( 
      data => {
        if(data.user_json._name == "Login"){
          alert("로그인 후 관람이 가능합니다.");
          this.router.navigate(['/']);
        }
        else{
          this.router.navigate(['/portfolio']);
        }
      },
      err => console.log(err),
      () => console.log('success')
    );
  }

}
