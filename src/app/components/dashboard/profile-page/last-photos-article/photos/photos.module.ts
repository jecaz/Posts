import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { PhotoModule } from '../photo/photo.module';
import { ArticleCardModule } from '../../../../../common/article-card/article-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, PhotoModule, ArticleCardModule],
  providers: [],
  exports: [PhotosComponent],
})
export class PhotosModule {}
