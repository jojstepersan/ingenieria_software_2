import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
	this.loadScript('assets/js/jquery.easing.1.3.js');
	this.loadScript('assets/js/jquery.waypoints.min.js');
	this.loadScript('assets/js/owl.carousel.min.js');
	this.loadScript('assets/js/jquery.countTo.js');
	this.loadScript('assets/js/jquery.stellar.min.js');
	this.loadScript('assets/js/jquery.magnific-popup.min.js');
	this.loadScript('assets/js/magnific-popup-options.js');
	this.loadScript('assets/js/moment.min.js');
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
}
