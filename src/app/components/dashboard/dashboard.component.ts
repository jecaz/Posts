import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { MockUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { debounceTime, distinctUntilChanged, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../styles/dashboard/dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('backToTop') sectionNeedToScroll: ElementRef;
  @ViewChild('search') searchInput: ElementRef;
  searchInput$: Observable<string>;
  users: MockUser[];
  currentUser: MockUser;
  posts$: Observable<Post[]>;
  searchValue: string;
  subscription = new Subscription();

  constructor(
    private userService: UserService,
    private postService: PostService,
    public router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(this.postService.fetchPosts().subscribe());
    this.posts$ = this.postService.posts$;
    this.currentUser = this.userService.getLoggedUser();
    this.users = this.userService.getActiveUsers();
  }

  ngAfterViewInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'input');
    this.subscription.add(
      this.searchInput$
        .pipe(
          pluck('target', 'value'),
          debounceTime(500),
          distinctUntilChanged(),
          tap((searchValue: string) => (this.searchValue = searchValue))
        )
        .subscribe()
    );
  }

  public goToSection() {
    this.sectionNeedToScroll.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  goToPostDetails(post: Post) {
    this.goToPage(`post/${post.id}`);
    this.searchValue = '';
  }

  goToPage(url?: string) {
    this.router.navigate([url]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
