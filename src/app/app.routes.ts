import { Routes } from '@angular/router';
import { ToDosComponent } from './Components/to-dos/to-dos.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ToDoDetailsComponent } from './Components/to-do-details/to-do-details.component';
import { LoginComponent } from './Components/auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'todos',
        component: ToDosComponent
    },
    {
        path: 'about',
        component: AboutUsComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
    {
        path: 'details/:id',
        component: ToDoDetailsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**', 
        redirectTo: 'home'
    }

];
