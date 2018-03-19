import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserinfoService {


  result : any;

  constructor(private http : Http) { }

  getUserName() {
     return this.http.get('/test');



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

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
}
}

class UserModel{
  constructor(
    public name : String,
    public id : String
  ){};
}