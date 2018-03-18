import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test : any = {};

  constructor(private userinfo : UserinfoService) { }

  ngOnInit() {
    this.test.message = this.userinfo.getUserName();
    console.log("test : " + this.test);
  }

}
