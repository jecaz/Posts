import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActorVote } from '../../../../../models/actor-vote.model';
import { VoteService } from '../../../../../services/vote.service';

@Component({
  selector: 'actor-votes',
  templateUrl: './actor-votes.component.html',
  styleUrls: [
    '../../../../../../styles/dashboard/profile-page/actor-vote-article/actor-votes/actor-votes.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorVotesComponent implements OnInit {
  actorVoters: ActorVote[];

  constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.actorVoters = this.voteService.getActorVoters();
  }
}
