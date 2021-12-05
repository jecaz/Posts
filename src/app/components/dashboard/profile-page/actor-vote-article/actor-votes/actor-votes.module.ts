import { NgModule } from '@angular/core';
import { ActorVotesComponent } from './actor-votes.component';
import { ActorVoteModule } from '../actor-vote/actor-vote.module';
import { ArticleCardModule } from '../../../../../common/article-card/article-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ActorVotesComponent],
  imports: [CommonModule, ActorVoteModule, ArticleCardModule],
  providers: [],
  exports: [ActorVotesComponent],
})
export class ActorVotesModule {}
