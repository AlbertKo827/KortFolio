import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
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