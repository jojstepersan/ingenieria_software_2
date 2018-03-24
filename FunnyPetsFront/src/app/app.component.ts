import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    clases: string = '';
    constructor(private _AuthService: AuthService) {
        this.loadScript('assets/js/jquery.easing.1.3.js');
        this.loadScript('assets/js/jquery.waypoints.min.js');
        this.loadScript('assets/js/owl.carousel.min.js');
        this.loadScript('assets/js/moment.min.js');
        this.loadScript('assets/js/jquery.countTo.js');
        this.loadScript('assets/js/bootstrap-datetimepicker.min.js');
        this.loadScript('assets/js/bootstrap-datepicker.min.js');
        this.loadScript('assets/js/main.js');
        if (this.isLoggedIn()) {
            this.clases = 'd-flex flex-column align-items-md-center p-5 bg-light';
        } else {
            this.clases = '';
        }
    }

    public loadScript(url) {
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    isLoggedIn() {
        return this._AuthService.isLoggedIn();
    }
}
