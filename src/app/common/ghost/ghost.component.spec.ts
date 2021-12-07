import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostComponent } from './ghost.component';

describe('GhostComponent', () => {
  let component: GhostComponent;
  let fixture: ComponentFixture<GhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GhostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostComponent);
    component = fixture.componentInstance;
    component.ghosts = { posts: new Array(1) };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
