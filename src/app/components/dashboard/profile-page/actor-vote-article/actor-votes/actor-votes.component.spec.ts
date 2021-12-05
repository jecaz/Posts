import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActorVote } from '../../../../../models/actor-vote.model';
import { VoteService } from '../../../../../services/vote.service';
import { ActorVotesComponent } from './actor-votes.component';

@Component({
  selector: 'actor-vote',
  template: '<div></div>',
})
class MockActorVoteComponent {
  @Input() actorVote: ActorVote;
}

class MockVoteService {
  getActorVoters() {}
}

describe('ActorVotesComponent', () => {
  let component: ActorVotesComponent;
  let fixture: ComponentFixture<ActorVotesComponent>;
  let mockVoteService: VoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorVotesComponent, MockActorVoteComponent],
      providers: [{ provide: VoteService, useClass: MockVoteService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockVoteService = TestBed.inject(VoteService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
