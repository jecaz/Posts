import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfilePageModule } from './profile-page/profile-page.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, ProfilePageModule],
  providers: [],
  exports: [DashboardComponent, RouterModule],
})
export class DashboardModule {}
