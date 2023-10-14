import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MainPageComponent } from './presentation/pages/main-page/main-page.component';
import { DetailsPageComponent } from './presentation/pages/details-page/details-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { PostsService } from './application/api-services/posts/posts.service';
import { POSTS_QUERY_PORT } from './application/ports/queries/posts.query';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonComponent } from './presentation/components/skeleton/skeleton.component';
import { ToolbarComponent } from './presentation/components/toolbar/toolbar.component';
import { postsReducer } from './application/store/posts/posts.reducer';
import { PostsEffects } from './application/store/posts/posts.effects';
import { DynamicTableComponent } from './presentation/pages/dynamic-table/dynamic-table.component';
import { TodoEditModalContainerComponent } from './presentation/containers/todo-edit-modal-container/todo-edit-modal-container.component';
import { FormsModule } from '@angular/forms';
import { todosReducer } from './application/store/todos/todos.reducer';
import { TodosEffects } from './application/store/todos/todos.effects';
import { TODOS_QUERY_PORT } from './application/ports/queries/todos.query';
import { TodosService } from './application/api-services/todos/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailsPageComponent,
    SkeletonComponent,
    ToolbarComponent,
    DynamicTableComponent,
    TodoEditModalContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({posts: postsReducer, todos: todosReducer}),
    EffectsModule.forRoot([PostsEffects, TodosEffects]),
  ],
  providers: [
    { provide: POSTS_QUERY_PORT, useClass: PostsService },
    { provide: TODOS_QUERY_PORT, useClass: TodosService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
