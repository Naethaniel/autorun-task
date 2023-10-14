import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TodoQuery } from 'src/app/application/ports/queries/todos.query';
import { TodoEditModalContainerComponent } from '../../containers/todo-edit-modal-container/todo-edit-modal-container.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import {
  selectTodos,
  selectAreTodosLoading,
} from 'src/app/application/store/todos/todos.selectors';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { loadTodos } from 'src/app/application/store/todos/todos.actions';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTableComponent implements OnInit, OnDestroy {
  private readonly dialog = inject(MatDialog);
  private readonly store = inject(Store);

  readonly areTodosLoading$ = this.store.select(selectAreTodosLoading);
  readonly todos$ = this.store.select(selectTodos);

  private readonly destoryed$ = new Subject<void>();
  readonly displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  readonly dataSource: MatTableDataSource<TodoQuery> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$.pipe(takeUntil(this.destoryed$)).subscribe((todos) => {
      this.dataSource.data = todos;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy(): void {
    this.destoryed$.next();
    this.destoryed$.complete();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditModal(rowData: TodoQuery): void {
    const dialogRef = this.dialog.open(TodoEditModalContainerComponent, {
      panelClass: 'todo-edit-modal',
      hasBackdrop: true,
      disableClose: true,
      data: { ...rowData },
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if (result) {
        const index = this.dataSource.data.findIndex(
          (item) => item.id === result.id
        );
        if (index !== -1) {
          this.dataSource.data = [
            ...this.dataSource.data.slice(0, index),
            result,
            ...this.dataSource.data.slice(index + 1),
          ];
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
}
