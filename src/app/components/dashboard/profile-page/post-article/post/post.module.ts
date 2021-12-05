import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentModule } from '../../comment/comment.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, CommentModule],
  providers: [],
  exports: [PostComponent],
})
export class PostModule {}
