import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../service/userinfo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test : any = "undifined";

  constructor(private userinfo : UserinfoService) { }

  ngOnInit() {
    this.test = this.userinfo.getUserName();
  }

}
