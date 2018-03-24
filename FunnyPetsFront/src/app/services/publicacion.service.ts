import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pust } from '../interfaces/pust';

@Injectable()
export class PublicacionService {

  usersUrl:string = 'https://funnypets-d3a7a.firebaseio.com/Post.json';
  constructor(private http:Http ) {}
  nuevoUser(pust:pust) {
let body = JSON.stringify(pust);
let headers = new Headers({
    'Content-Type':'application/json'
});
return this.http.post(this.usersUrl, body, { headers })
    .map(res=>{
  console.log(res.json());
  return res.json();
    });
  }
  getUser(key$:string){
let url=`${this.usersUrl}/${ key$ }.json`;
return this.http.get(url).map(res=>res.json());

  }
}
