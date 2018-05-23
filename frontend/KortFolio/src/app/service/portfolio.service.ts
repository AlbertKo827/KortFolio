import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PortfolioService {

  constructor(private http : Http, private router : Router) { }

  postPortfolio(body : any) : Observable<PortfolioModel>{
    return this.http.post('api/portfolio', body).map(
     res => {
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

export class PortfolioModel{
  constructor(
    public image : String,
    public title : String,
    public body : String
  ) { }
}
