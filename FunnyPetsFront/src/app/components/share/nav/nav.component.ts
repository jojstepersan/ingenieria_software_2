import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    private userDetails: firebase.User = null;

    constructor(private _AuthService: AuthService,
        private router: Router) { }

    ngOnInit() {

    }

    isLoggedIn() {
        return this._AuthService.isLoggedIn();
    }

    logOut() {
        if (this._AuthService.logOut()) {
            this.router.navigate(['/login']);
        }
    }

    getName() {
        return this._AuthService.getUser();
    }
}
