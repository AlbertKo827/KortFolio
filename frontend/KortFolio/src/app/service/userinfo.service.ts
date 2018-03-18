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
    this.http.get('/test')
             .map((res) => res.json())
             .subscribe(data => {
               console.log('data : ' + data);
               this.result = data;
             }, err =>{
               console.log('err : ' + err);
               return undefined;
             },
            ()=>{
              console.log(this.result);
              return this.result;
            });
  }
}
