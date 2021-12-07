import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GhostComponent } from './ghost.component';

@NgModule({
  declarations: [GhostComponent],
  imports: [CommonModule],
  providers: [],
  exports: [GhostComponent],
})
export class GhostModule {}
