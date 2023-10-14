import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface PostQuery {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostsQueryPort {
    getPosts(): Observable<Array<PostQuery>>;
    getPost(postId: PostQuery['id']): Observable<PostQuery>;
}

export const POSTS_QUERY_PORT = new InjectionToken<PostsQueryPort>('POSTS_QUERY_PORT');