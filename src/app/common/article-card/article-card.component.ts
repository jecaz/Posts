import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: [
    '../../../styles/common/article-card/article-card.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
