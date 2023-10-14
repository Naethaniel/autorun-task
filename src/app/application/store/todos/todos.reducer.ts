import { createReducer, on } from '@ngrx/store';
import * as AppActions from './todos.actions';
import { TodosState } from './todos.state';

export const initialState: TodosState = {
  todos: [],
  areTodosLoading: false,
};

export const todosReducer = createReducer(
  initialState,
  // todos
  on(AppActions.loadTodos, (state) => ({ ...state, areTodosLoading: true })),
  on(AppActions.setTodos, (state, { todos }) => ({ ...state, areTodosLoading: false, todos }))
);
