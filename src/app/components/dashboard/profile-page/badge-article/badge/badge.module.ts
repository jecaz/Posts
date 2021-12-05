import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BadgeComponent],
})
export class BadgeModule {}
