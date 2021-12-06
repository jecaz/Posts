import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionsModule } from '../../actions/actions.module';
import { CommentModule } from '../../comment/comment.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, CommentModule, ActionsModule],
  providers: [],
  exports: [PostComponent],
})
export class PostModule {}
