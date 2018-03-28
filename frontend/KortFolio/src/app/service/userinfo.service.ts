import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserinfoService {


  result : any;



  constructor(private http : Http, private router : Router) { }

  getUserName() : Observable<UserModel>{
     return this.http.get('api/user').map(
      res => {
        console.log("Response" + res);
        return res.json();
    })
                                 .catch(
      this.handleErrorObservable
    );
  }

  getTest() : Observable<TestModel>{
    console.log("current url : " + this.router.url);

    return this.http.get(this.router.url).map(
      res => {
        console.log("Response" + res);
        return res.json();
    })
                                 .catch(
      this.handleErrorObservable
    );
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
}
}

export class TestModel{
  constructor(
    public test : String
  ){};
}

export class UserModel{
  constructor(
    public _id : String,
    public _password : String,
    public  _email : String,
    public  _name : String
    // public message : String,
    // public usernaem : String
  ){};
}