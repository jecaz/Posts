import { Injectable } from '@angular/core';
import { ActorVote } from '../models/actor-vote.model';
import { ACTOR_VOTERS } from '../api.data';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  getActorVoters(): ActorVote[] {
    return ACTOR_VOTERS;
  }
}
