import { Component, OnInit } from '@angular/core';
import { UserinfoService, UserModel } from '../service/userinfo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test : UserModel;

  constructor(private userinfo : UserinfoService) { }

  ngOnInit() {
    this.userinfo.getUserName().subscribe(
      data => this.test,
      err => alert(err),
      () => console.log("success")
    );
    
    console.log("test : " + this.test._name);
  }

}
