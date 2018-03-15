import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
    { path: 'user', component: UserComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
