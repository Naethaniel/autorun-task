import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { selectPosts, selectArePostsLoading } from '../../../application/store/posts/posts.selectors';
import { Store } from '@ngrx/store';
import { loadPosts } from '../../../application/store/posts/posts.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly posts$ = this.store.select(selectPosts);
  readonly loading$ = this.store.select(selectArePostsLoading);

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  navigateToDetails(postId: number): void {
    this.router.navigate(['/details', postId]);
  }
}
