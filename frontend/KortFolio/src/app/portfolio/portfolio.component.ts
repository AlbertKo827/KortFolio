import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../app.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( private UserService : UserinfoService, private router : Router) { }

  ngOnInit() {
    // this.UserService.getUserSelf().subscribe( 
    //   data => {
    //     if(data.user_json._name == "Login"){
    //       alert("로그인 후 관람이 가능합니다.");
    //       this.router.navigate(['/']);
    //     }
    //   },
    //   err => console.log(err),
    //   () => console.log('success')
    // );
  }
  

}
