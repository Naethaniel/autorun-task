import { MainPageComponent } from './presentation/pages/main-page/main-page.component';
import { DetailsPageComponent } from './presentation/pages/details-page/details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DynamicTableComponent } from './presentation/pages/dynamic-table/dynamic-table.component';

// app-routing.module.ts

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: 'dynamic-table', component: DynamicTableComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

