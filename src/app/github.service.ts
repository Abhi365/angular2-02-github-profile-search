import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '51c34e1097ee4cb17a70';
  private client_secret = '69945f47a39a3631767687636f26c84beda494ba';
  
  constructor(private _http:Http) {
    console.log('Github Service Ready....');
    this.username = 'StephenGrider';
   }

   getUser() {
     return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
   }

   getRepos() {
     return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
   }

   updateUser(username:string) {
     this.username=username;
   }

}
