import { TodoQuery } from "../../ports/queries/todos.query";

export interface TodosState {
    areTodosLoading: boolean;
    todos: Array<TodoQuery>;
}