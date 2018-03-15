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

  getUserName() : void {
    this.http.get('./user')
             .map((res) => res.json())
             .subscribe(data => {
               console.log(data);
               this.result = data;
             }, err =>{
               console.log(err);
               return undefined;
             },
            ()=>{
              console.log(this.result);
            });
  }
}
