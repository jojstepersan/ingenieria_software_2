import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../interfaces/user';
import 'rxjs/Rx';

@Injectable()
export class UsersService {
    usersUrl:string = 'https://funnypets-d3a7a.firebaseio.com/users.json';
    constructor(private http:Http ) {}
    nuevoUser(user:User) {
	let body = JSON.stringify(user);
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
