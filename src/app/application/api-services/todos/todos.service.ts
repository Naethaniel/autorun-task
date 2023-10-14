import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay } from "rxjs";
import { TodoQuery, TodosQueryPort } from "../../ports/queries/todos.query";

@Injectable()
export class TodosService implements TodosQueryPort {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    private readonly httpClient = inject(HttpClient);

    getTodos(): Observable<Array<TodoQuery>> {
        return this.httpClient.get<Array<TodoQuery>>(this.apiUrl).pipe(delay(3_000));
    }
}