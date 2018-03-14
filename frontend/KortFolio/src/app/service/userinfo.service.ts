import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserinfoService {

  constructor(private http : Http) { }

  getUserName() : Observable<any> {
    return this.http.get('./')
                    .map((res : any) => res.json());
  }
}
