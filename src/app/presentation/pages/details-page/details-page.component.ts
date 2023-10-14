// details-page.component.ts

import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsPostLoading, selectPost } from '../../../application/store/posts/posts.selectors';
import { loadPost } from '../../../application/store/posts/posts.actions';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(Store);
  post$ = this.store.select(selectPost);
  isPostLoading$ = this.store.select(selectIsPostLoading);

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');

    if(postId === null) {
      this.router.navigate(['/']);
    } else {
      this.store.dispatch(loadPost({ postId: +postId }));
    }
  }
}
