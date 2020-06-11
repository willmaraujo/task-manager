import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTaskComponent } from './list';


@NgModule({
  declarations: [ListTaskComponent],
  imports: [
    CommonModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
