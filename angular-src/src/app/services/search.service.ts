import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
  search: any;
  constructor(private http:Http) { }

  searchUser(search){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/search', search, {headers: headers})
      .map(res => res.json());
  }
}