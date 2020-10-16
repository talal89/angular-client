import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const authenticationRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch : 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
