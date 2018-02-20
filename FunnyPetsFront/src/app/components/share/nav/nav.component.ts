import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    private userDetails: firebase.User = null;
    
    constructor(private _AuthService:AuthService) { }
    
    ngOnInit() {

    }

    isLoggedIn() {
	return this._AuthService.isLoggedIn();
    }

    logOut() {
	this._AuthService.logOut();
    }

    getName() {
	return this._AuthService.getUser();
    }
}
