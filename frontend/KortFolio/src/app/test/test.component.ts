import { Component, OnInit } from '@angular/core';
import { UserinfoService, UserModel } from '../service/userinfo.service';
import { Params } from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test : UserModel;

  constructor(private userinfo : UserinfoService) { }

  ngOnInit() {

    console.log("test : " + this.test.user_json._name);
  }

}