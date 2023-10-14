import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);

export const selectArePostsLoading = createSelector(selectPostsState, (state) => state.arePostsLoading);

export const selectPost = createSelector(
  selectPostsState,
  (state) => state.post
);

export const selectIsPostLoading = createSelector(selectPostsState, (state) => state.isPostLoading);