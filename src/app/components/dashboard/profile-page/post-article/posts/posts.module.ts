import { NgModule } from '@angular/core';
import { ArticleCardModule } from '../../../../../common/article-card/article-card.module';
import { PostsComponent } from './posts.component';
import { PostModule } from '../post/post.module';
import { CommonModule } from '@angular/common';
import { GhostModule } from '../../../../../common/ghost/ghost.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostModule, ArticleCardModule, GhostModule],
  providers: [],
  exports: [PostsComponent],
})
export class PostsModule {}
