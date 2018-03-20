import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserinfoService {


  result : any;

  constructor(private http : Http, private httpC : HttpClient) { }

  getUserName() {
     return this.http.get('/test').map(
      res => {
        res.json();
    });

  



            //  .map((res) => res.json())
            //  .subscribe(data => {
            //    console.log('data : ' + data.String);
            //    this.result = data;
            //  }, err =>{
            //    console.log('err : ' + err);
            //  },
            // ()=>{
            //   console.log(this.result);
            //   return this.result;
            // });
            
            // console.log('result : ' + this.result);
            // return this.result;
  }

  getUserNameC() {
    return this.httpC.get<UserModel>('/test');
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
}
}

class UserModel{
  constructor(
    public _id : String,
    public _password : String,
    public  _email : String,
    public  _name : String
  ){};
}