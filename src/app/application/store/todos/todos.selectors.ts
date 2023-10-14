import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);

export const selectAreTodosLoading = createSelector(selectTodosState, (state) => state.areTodosLoading);