import { PostQuery } from "../../ports/queries/posts.query";

export interface PostsState {
    posts: Array<PostQuery>;
    post: PostQuery | null;
    arePostsLoading: boolean;
    isPostLoading: boolean;
  }
  