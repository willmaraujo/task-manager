import { Routes } from '@angular/router';
import { ListTaskComponent } from './list';
import { RegisterComponent } from './register';
import { EditComponent } from './edit';

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
  },
  {
    path: 'tasks/edit/:id',
    component: EditComponent
  }
];
