import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadTodos, setTodos } from './todos.actions';
import { TODOS_QUERY_PORT } from '../../ports/queries/todos.query';

@Injectable()
export class TodosEffects {
  private readonly actions$ = inject(Actions);
  private readonly todosQueryPort = inject(TODOS_QUERY_PORT);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todosQueryPort.getTodos().pipe(map((todos) => setTodos({ todos })))
      )
    )
  );
}
