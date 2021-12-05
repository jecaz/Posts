import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActorVote } from 'src/app/models/actor-vote.model';
import { ActorVoteComponent } from './actor-vote.component';

const mockActorVote = new ActorVote({
  id: 3,
  actor: 'Michael Streiton',
  votePercentage: 11,
  voters: [
    '../../../../assets/images/users/user9.png',
    '../../../../assets/images/users/user13.png',
  ],
});

describe('ActorVoteComponent', () => {
  let component: ActorVoteComponent;
  let fixture: ComponentFixture<ActorVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorVoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorVoteComponent);
    component = fixture.componentInstance;
    component.actorVote = mockActorVote;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
