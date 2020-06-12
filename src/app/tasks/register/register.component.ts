import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('formTask',  { static: true }) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  register(): void {
    if (this.formTask.form.valid) {
      this.taskService.post(this.task);
      this.router.navigate(['tasks']);
    }
  }

}
