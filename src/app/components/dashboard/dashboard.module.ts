import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { defaultApiConfig } from '../../config/default-endpoint-config';
import { ApiConfig } from '../../config/api-config';
import { PipesModule } from '../../pipe/pipe.module';
import { DashboardComponent } from './dashboard.component';
import { ProfilePageModule } from './profile-page/profile-page.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, ProfilePageModule, PipesModule],
  providers: [{ provide: ApiConfig, useValue: defaultApiConfig }],
  exports: [DashboardComponent, RouterModule],
})
export class DashboardModule {}
