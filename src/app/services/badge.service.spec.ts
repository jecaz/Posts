import { inject, TestBed } from '@angular/core/testing';
import { BADGES } from '../mockApi.data';
import { BadgeService } from './badge.service';

const mockBadges = BADGES;

describe('BadgeService', () => {
  let service: BadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadgeService],
    });
    service = TestBed.inject(BadgeService);
  });

  it('should BadgeService is injected', inject(
    [BadgeService],
    (badgeService: BadgeService) => {
      expect(badgeService).toBeTruthy();
    }
  ));

  it('should be able to load badges', () => {
    const result = service.getBadges();
    expect(result).toEqual(mockBadges);
  });
});
