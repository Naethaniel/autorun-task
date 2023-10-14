import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditModalContainerComponent } from './todo-edit-modal-container.component';

describe('TodoEditModalContainerComponent', () => {
  let component: TodoEditModalContainerComponent;
  let fixture: ComponentFixture<TodoEditModalContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoEditModalContainerComponent]
    });
    fixture = TestBed.createComponent(TodoEditModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
