import { TaskDoneDirective } from './task-done.directive';
import { ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ListTaskComponent } from '../list';

export class MockElementRef extends ElementRef {}

describe('TaskDoneDirective', () => {

  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;

  TestBed.configureTestingModule({
    providers: [
      ListTaskComponent,
      { provide: ElementRef, useClass: MockElementRef }
    ]
  }).compileComponents();

  beforeEach(() => {
        fixture = TestBed.createComponent(ListTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

  it('should create an instance', () => {
    const directive = new TaskDoneDirective(fixture);
    expect(directive).toBeTruthy();
  });
});
