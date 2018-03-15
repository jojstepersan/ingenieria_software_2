import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    
    constructor( private _firebaseAuth: AngularFireAuth, private router: Router) {
	this.user = _firebaseAuth.authState;
	this.user.subscribe(
	    (user) => {
		if (user) {
		    this.userDetails = user;
		} else {
		    this.userDetails = null;
		}
	    }
	);
    }

    signInEmail(email,password) {
	const credential = firebase.auth.EmailAuthProvider.credential(email,password);
	console.log(this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password));
	return this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password);
    }

    signTwitter() {
	return this._firebaseAuth.auth.signInWithPopup(
	    new firebase.auth.TwitterAuthProvider()
	)
    }

    signFacebook() {
	return this._firebaseAuth.auth.signInWithPopup(
	    new firebase.auth.FacebookAuthProvider()
	)
    }

    signGoogle() {
	return this._firebaseAuth.auth.signInWithPopup(
	    new firebase.auth.GoogleAuthProvider()
	)
    }

    isLoggedIn() {
	if (this.userDetails == null) {
	    return false;
	} else {
	    return true;
	}
    }

    logOut() {
	return this._firebaseAuth.auth.signOut()
	    .then((res) => true);
    }

    getUser() {
	return this.userDetails.displayName;
    }
}
