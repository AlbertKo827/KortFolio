import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['../app.component.css'],
})

export class TestComponent implements OnInit {
  constructor( private UserService : PortfolioService, private router : Router) { }

  _postBody : any = {
    image : "",
    title : "",
    body : ""
  }

  result : any;
  test = '';
  _image : String; 
  _title : String;
  _body : String;

  check : boolean = true;
  testCnt = [];

  ngOnInit() {
    
  }

  clickSubmmit(){
    this._postBody = {
      image : this._image,
      title : this._title,
      body : this._body,
    }

    console.log(this._postBody);

    this.UserService.postPortfolio(this._postBody).subscribe( 
      data => {
        this.result = data;
        console.log(this.result.body);
      },
      err => console.log(err),
      () => console.log('success')
    );
  }

  clickButton(){
    this.check = !this.check;
    this.testCnt.push(1);
    console.log(this.testCnt);
  }
}