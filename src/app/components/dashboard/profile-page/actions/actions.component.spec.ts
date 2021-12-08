import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Post } from '../../../../models/post.model';

import { ActionsComponent } from './actions.component';

const mockPost: Post = {
  id: 1,
  body: 'Test body',
  likes: [
    { name: 'Jenny', icon: '../../../../assets/images/users/user1.png' },
    { name: 'Robert', icon: '../../../../assets/images/users/user2.png' },
    { name: 'Robert', icon: '../../../../assets/images/users/user3.png' },
  ],
};

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get friends name', () => {
    const mockNames = 'Jenny , Robert';
    const result = component.getLikeFriendsNames(mockPost);
    expect(result).toEqual(mockNames);
  });

  it('should tottle visibility of comment', () => {
    spyOn(component.commentState, 'emit');
    const commentIconElement = debugElement.query(
      By.css('.actions-likes-actions-comment')
    ).nativeElement;
    commentIconElement.dispatchEvent(new Event('click'));
    expect(component.visible).toBeTrue();
    expect(component.commentState.emit).toHaveBeenCalledWith(true);
  });
});
