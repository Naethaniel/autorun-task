import { createAction, props } from '@ngrx/store';
import { TodoQuery } from '../../ports/queries/todos.query';

export const loadTodos = createAction('[Data Table Page] Load Todos');
export const setTodos = createAction('[Data Table Page] Set Todos', props<{ todos: Array<TodoQuery> }>());
