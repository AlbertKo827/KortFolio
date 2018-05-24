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

  _image : HTMLElement;
  _title : HTMLElement;
  _body : HTMLElement;

  ngOnInit() {
    
  }

  clickSubmmit(){
    this._image = document.getElementById("image");
    this._title = document.getElementById("title");
    this._body = document.getElementById("body");

    this._postBody = {
      image : this._image.getAttribute("value"),
      title : this._title.getAttribute("value"),
      body : this._body.getAttribute("value")
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
}