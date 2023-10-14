import { createAction, props } from '@ngrx/store';
import { PostQuery } from '../../ports/queries/posts.query';

export const loadPosts = createAction('[Main Page] Load Posts');
export const setPosts = createAction('[Main Page] Set Posts', props<{ posts: Array<PostQuery> }>());

export const loadPost = createAction('[Detail Page] Load Post Details', props<{ postId: number }>());
export const setPost = createAction('[Detail Page] Set Post Details', props<{ post: PostQuery }>());
