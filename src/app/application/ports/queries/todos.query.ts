import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface TodoQuery {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface TodosQueryPort {
    getTodos(): Observable<Array<TodoQuery>>;
}

export const TODOS_QUERY_PORT = new InjectionToken<TodosQueryPort>('TODOS_QUERY_PORT');