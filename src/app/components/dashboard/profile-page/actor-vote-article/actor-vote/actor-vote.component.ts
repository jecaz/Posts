import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActorVote } from '../../../../../models/actor-vote.model';

@Component({
  selector: 'actor-vote',
  templateUrl: './actor-vote.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/actor-vote-article/actor-vote/actor-vote.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorVoteComponent {
  @Input() actorVote: ActorVote;
}
