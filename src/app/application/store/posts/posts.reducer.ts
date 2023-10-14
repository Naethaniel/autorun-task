import { createReducer, on } from '@ngrx/store';
import * as AppActions from './posts.actions';
import { PostsState } from './posts.state';

export const initialState: PostsState = {
  posts: [],
  post: null,
  arePostsLoading: false,
  isPostLoading: false
};

export const postsReducer = createReducer(
  initialState,
  // posts
  on(AppActions.loadPosts, (state) => ({ ...state, arePostsLoading: true })),
  on(AppActions.setPosts, (state, { posts }) => ({ ...state, arePostsLoading: false, posts })),
  //post
  on(AppActions.loadPost, (state) => ({ ...state, isPostLoading: true})),
  on(AppActions.setPost, (state, { post }) => ({...state, isPostLoading: false, post}))
);
