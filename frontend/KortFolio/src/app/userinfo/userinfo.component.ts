import { Component, OnInit } from '@angular/core';
import { UserinfoService, UserModel } from '../service/userinfo.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userId : any;
  userdata : UserModel;

  constructor(private userinfo : UserinfoService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      console.log(this.userId);
    }); 
    

    this.userinfo.getUser(this.userId).subscribe(
      data => this.userdata,
      err => alert(err),
      () => console.log("success")
    );
  }

}
