import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeedbackService {

  constructor(private http : Http, private router : Router) { }

  getComments() : Observable<CommentMdoel>{
    return this.http.get('api/feedback').map(
      res => {
        return res.json();
      }
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

export class CommentMdoel{
  constructor(
    public _name : String,
    public _pw : String,
    public _provider : String,
    public _date : String,
    public _comment : String
  ){};
}
