import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskDoneDirective } from './shared';
import { ListTaskComponent } from './list';
import { RegisterComponent } from './register';
import { EditComponent } from './edit';


@NgModule({
  declarations: [ListTaskComponent, RegisterComponent, EditComponent, TaskDoneDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
