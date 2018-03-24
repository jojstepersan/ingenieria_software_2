import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }

  ngOnInit() {
    console.log(this.getuphoto());
  }
  getuphoto() {
      return this._AuthService.getuphoto();
  }
  getName() {
      return this._AuthService.getUser();
  }

}
