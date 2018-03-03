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
import { IndexComponent } from './components/index/index.component';
import { UserComponent } from './components/user/user.component';
import { UserEntryComponent } from './components/user/user-entry/user-entry.component';
import { DataProfileComponent } from './components/user/data-profile/data-profile.component';
import { NotificationComponent } from './components/user/notification/notification.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        FooterComponent,
        HeaderComponent,
        IndexComponent,
        UserComponent,
        UserEntryComponent,
        DataProfileComponent,
        NotificationComponent,
        RegisterComponent,
        ProfileComponent
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
