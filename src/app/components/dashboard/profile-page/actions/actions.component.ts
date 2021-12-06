import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: [
    '../../../../../styles/dashboard/profile-page/actions/actions.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
  @Input() post: Post;
  @Input() visible: boolean;
  @Output() commentState = new EventEmitter<boolean>();

  getLikeFriendsNames(post: Post): string {
    return post && post.likes
      ? `${post.likes[0].name} , ${post.likes[1].name}`
      : '';
  }

  toggleVisibility() {
    this.visible = !this.visible;
    this.commentState.emit(this.visible);
  }
}
