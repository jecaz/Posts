import { NgModule } from '@angular/core';
import { PlayItemsComponent } from './play-items.component';
import { PlayItemModule } from '../play-item/play-item.module';
import { ArticleCardModule } from '../../../../../common/article-card/article-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlayItemsComponent],
  imports: [CommonModule, PlayItemModule, ArticleCardModule],
  providers: [],
  exports: [PlayItemsComponent],
})
export class PlayItemsModule {}
