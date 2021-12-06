import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionsModule } from '../actions/actions.module';
import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, ActionsModule],
  providers: [],
  exports: [CommentComponent],
})
export class CommentModule {}
