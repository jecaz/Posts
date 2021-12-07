import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comment } from '../../../../models/comment.model';
import { CommentComponent } from './comment.component';

const mockComment: Comment = {
  id: 1,
  body: 'Test body',
  profileImage: '../../../../assets/images/users/user4.png',
};

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = mockComment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
