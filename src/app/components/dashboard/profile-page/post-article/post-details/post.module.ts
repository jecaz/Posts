import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostModule } from '../post/post.module';
import { PostDetailsComponent } from './post-details.component';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule, PostModule],
  providers: [],
  exports: [PostDetailsComponent],
})
export class PostDetailsModule {}
