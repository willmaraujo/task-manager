import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.getAll();
    // this.tasks = [
    //   new Task(1, 'Task 1', false),
    //   new Task(2, 'Task 2', true)
    // ];
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

}
