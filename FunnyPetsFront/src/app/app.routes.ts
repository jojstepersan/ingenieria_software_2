import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
