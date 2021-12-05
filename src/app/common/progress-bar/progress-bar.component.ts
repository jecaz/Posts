import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [
    '../../../styles/common/progress-bar/progress-bar.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() progress: number;
}
