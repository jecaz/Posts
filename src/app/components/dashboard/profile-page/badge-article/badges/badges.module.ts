import { NgModule } from '@angular/core';
import { BadgesComponent } from './badges.component';
import { BadgeModule } from '../badge/badge.module';
import { ArticleCardModule } from '../../../../../common/article-card/article-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BadgesComponent],
  imports: [CommonModule, BadgeModule, ArticleCardModule],
  providers: [],
  exports: [BadgesComponent],
})
export class BadgesModule {}
