import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ghost } from '../../models/ghost.model';

@Component({
  selector: 'ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['../../../styles/common/ghost/ghost.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GhostComponent {
  @Input() ghosts: Ghost;
}
