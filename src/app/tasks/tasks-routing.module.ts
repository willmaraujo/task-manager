import { Routes } from '@angular/router';
import { ListTaskComponent } from './list';
import { RegisterComponent } from './register';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent
  },
  {
    path: 'tasks/register',
    component: RegisterComponent
  }
];
