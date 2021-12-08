import { inject, TestBed } from '@angular/core/testing';
import { ACTOR_VOTERS } from '../mockApi.data';
import { VoteService } from './vote.service';

const mockVotes = ACTOR_VOTERS;

describe('VoteService', () => {
  let service: VoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteService],
    });
    service = TestBed.inject(VoteService);
  });

  it('should VoteService is injected', inject(
    [VoteService],
    (voteService: VoteService) => {
      expect(voteService).toBeTruthy();
    }
  ));

  it('should be able to get votes', () => {
    const result = service.getActorVoters();
    expect(result).toEqual(mockVotes);
  });
});
