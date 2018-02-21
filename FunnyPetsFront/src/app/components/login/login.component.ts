import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = {
        email: '',
        password: '',
        birthday: ''
    }

    constructor(private _userService: UsersService,
        private _AuthService: AuthService,
        private router: Router) { }

    ngOnInit() { }

    guardar() {
        this._userService.nuevoUser(this.user)
            .subscribe(data => {
                this.router.navigate(['/user']);
            }, error => console.error(error));
    }

    signInMail() {
        this._AuthService.signInEmail(this.user.email, this.user.password)
            .then((res) => {
                this.router.navigate(['/user']);
            })
            .catch((err) => console.error('Error:' + err));
    }

    signInWithFacebook() {
        this._AuthService.signFacebook()
            .then((res) => {
                this.router.navigate(['/user'])
            })
            .catch((err) => console.log(err));
    }

    signInWithTwitter() {
        this._AuthService.signTwitter()
            .then((res) => {
                this.router.navigate(['/user'])
            })
            .catch((err) => console.log(err));
    }

    signInWithGoogle() {
        this._AuthService.signGoogle()
            .then((res) => {
                this.router.navigate(['/user'])
            })
            .catch((err) => console.log(err));
    }
}
