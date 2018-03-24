import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../services/auth.service';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-data-profile',
    templateUrl: './data-profile.component.html',
    styleUrls: ['./data-profile.component.css']
})
export class DataProfileComponent implements OnInit {

    constructor(private _AuthService: AuthService) { }

    ngOnInit() {
    }

    getPhoto() {
        return this._AuthService.getPhoto();
    }

}
