import { Routes } from '@angular/router';
import { ToDosComponent } from './Components/to-dos/to-dos.component';

import { ToDoDetailsComponent } from './Components/to-dos/to-do-details/to-do-details.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { EditTodoComponent } from './Components/to-dos/edit-todo/edit-todo.component';
import { AddTodoComponent } from './Components/to-dos/add-todo/add-todo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },

    {
        path:'todos',
        component: ToDosComponent
    },
    {
        path: 'details/:id',
        component: ToDoDetailsComponent
    },
    {
        path:'add-todo',
        component: AddTodoComponent
    },
    {
        path: 'edit-todo/:id',
        component: EditTodoComponent
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
