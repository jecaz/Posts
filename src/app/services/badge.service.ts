import { Injectable } from '@angular/core';
import { BADGES } from '../mockApi.data';
import { Badge } from '../models/badge.model';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  getBadges(): Badge[] {
    return BADGES;
  }
}
