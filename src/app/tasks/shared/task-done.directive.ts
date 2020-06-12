import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskDone]'
})
export class TaskDoneDirective implements OnInit {

  @Input() taskDone: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.taskDone) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
