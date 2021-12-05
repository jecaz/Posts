import { NgModule } from '@angular/core';
import { ActorVoteComponent } from './actor-vote.component';
import { ProgressBarModule } from '../../../../../common/progress-bar/progress-bar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ActorVoteComponent],
  imports: [CommonModule, ProgressBarModule],
  providers: [],
  exports: [ActorVoteComponent],
})
export class ActorVoteModule {}
