import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService, Task } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.task = this.taskService.getById(id);
  }

  update(): void {
    if (this.formTask.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
