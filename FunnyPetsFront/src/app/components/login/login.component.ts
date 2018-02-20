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
    
    constructor(private _userService:UsersService,
		private _AuthService:AuthService,
		private router:Router) { }

    ngOnInit() {
        this.loadScript('assets/js/jquery.easing.1.3.js');
        this.loadScript('assets/js/jquery.waypoints.min.js');
        this.loadScript('assets/js/owl.carousel.min.js');
        this.loadScript('assets/js/moment.min.js');
        this.loadScript('assets/js/jquery.countTo.js');
        this.loadScript('assets/js/bootstrap-datetimepicker.min.js');
        this.loadScript('assets/js/bootstrap-datepicker.min.js');
        this.loadScript('assets/js/main.js');
    }

    public loadScript(url) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    guardar() {
        console.log(this.user);
	this._userService.nuevoUser(this.user)
	    .subscribe(data =>{
		this.router.navigate(['/login']);
	    },error=> console.error(error));
    }
    
    signInMail() {
	this._AuthService.signInEmail(this.user.email, this.user.password)
	    .then((res)=>{
		this.router.navigate(['/login']);
	    })
	    .catch((err) => console.error('Error:'+err));
    }

    signInWithFacebook() {
	this._AuthService.signFacebook()
	    .then((res) => { 
		this.router.navigate(['/'])
            })
	    .catch((err) => console.log(err));
    }

    signInWithTwitter() {
	this._AuthService.signTwitter()
	    .then((res) => { 
		this.router.navigate(['/'])
            })
	    .catch((err) => console.log(err));
    }

    signInWithGoogle() {
	this._AuthService.signGoogle()
	    .then((res) => { 
		this.router.navigate(['/'])
            })
	    .catch((err) => console.log(err));
    }
}
