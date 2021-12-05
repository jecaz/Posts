import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeService } from '../../../../../services/badge.service';
import { BadgesComponent } from './badges.component';

class MockBadgeService {
  getBadges() {}
}

describe('BadgesComponent', () => {
  let component: BadgesComponent;
  let fixture: ComponentFixture<BadgesComponent>;
  let mockBadgeService: BadgeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgesComponent],
      providers: [{ provide: BadgeService, useClass: MockBadgeService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockBadgeService = TestBed.inject(BadgeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
