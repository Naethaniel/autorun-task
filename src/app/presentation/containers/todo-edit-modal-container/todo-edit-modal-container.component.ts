import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoQuery } from 'src/app/application/ports/queries/todos.query';

@Component({
  selector: 'app-todo-edit-modal-container',
  templateUrl: './todo-edit-modal-container.component.html',
  styleUrls: ['./todo-edit-modal-container.component.scss']
})
export class TodoEditModalContainerComponent {
  private readonly dialogRef = inject(MatDialogRef);
  readonly data: TodoQuery = inject(MAT_DIALOG_DATA);

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
