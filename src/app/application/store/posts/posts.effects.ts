import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadPosts, loadPost, setPosts, setPost } from './posts.actions';
import { POSTS_QUERY_PORT } from '../../ports/queries/posts.query';

@Injectable()
export class PostsEffects {
  private readonly actions$ = inject(Actions);
  private readonly postsQueryPort = inject(POSTS_QUERY_PORT);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() =>
        this.postsQueryPort.getPosts().pipe(map((posts) => setPosts({ posts })))
      )
    )
  );

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPost),
      switchMap(({ postId }) =>
        this.postsQueryPort
          .getPost(postId)
          .pipe(map((post) => setPost({ post })))
      )
    )
  );
}
