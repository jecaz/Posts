import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/dashboard/profile-page/post-article/post-details/post-details.component';
import { PostsComponent } from './components/dashboard/profile-page/post-article/posts/posts.component';
import { ProfilePageComponent } from './components/dashboard/profile-page/profile-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsComponent },
      { path: 'post/:id', component: PostDetailsComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
