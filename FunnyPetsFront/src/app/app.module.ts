import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/share/nav/nav.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HeaderComponent } from './components/share/header/header.component';

import { UsersService } from './services/users.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        BrowserModule,
	AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
	AngularFireDatabaseModule,
	AngularFireAuthModule,
        APP_ROUTING
    ],
    providers: [
	UsersService,
	AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
