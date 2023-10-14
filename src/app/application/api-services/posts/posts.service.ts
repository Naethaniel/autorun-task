import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, delay } from "rxjs";
import { PostQuery, PostsQueryPort } from "../../ports/queries/posts.query";

@Injectable()
export class PostsService implements PostsQueryPort {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    private readonly httpClient = inject(HttpClient);

    getPosts(): Observable<Array<PostQuery>> {
        return this.httpClient.get<Array<PostQuery>>(this.apiUrl).pipe(delay(3_000));
    }

    getPost(postId: number): Observable<PostQuery> {
        return this.httpClient.get<PostQuery>(`${this.apiUrl}/${postId}`).pipe(delay(3_000));
    }
}