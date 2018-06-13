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

  getUser(id : String) : Observable<UserModel>{
     return this.http.get('api/user/' + id).map(
      res => {
        return res.json();
    })
                                 .catch(
      this.handleErrorObservable
    );
  }

  getUserSelf() : Observable<UserModel>{
    return this.http.get('api/user').map(
      res => {
        return res.json();
    })
                                 .catch(
      this.handleErrorObservable
    );
  }

  register(body) : Observable<any>{
    return this.http.post('register', body).map(
      res => {return res.json();}
    )
    .catch(
      this.handleErrorObservable
    );
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

export class UserModel{
  constructor(
    public login_status : Boolean,
    public status : String,
    public user_json : {
        _providor : String,
        _name : String,
        _email : String,
        _pw : String,
        _index : Number
    }
  ){};
}