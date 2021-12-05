import { MockUser } from './models/user.model';
import { Badge } from './models/badge.model';
import { PlayItem } from './models/play-item.model';
import { Photo } from './models/photo.model';
import { ActorVote } from './models/actor-vote.model';
import { MockPost } from './models/post.model';

export const ACTIVE = '#2ADC89';
export const AWAY = '#FFDF5C';
export const INVISIBLE = '#B2F3C1';
export const DO_N0T_DISTURB = '#F94F4F';
export const ACTIVE_USERS: MockUser[] = [
  new MockUser({
    id: 1,
    username: 'Marko',
    nickname: null,
    profileIcon: '../../../../assets/images/users/user4.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
  new MockUser({
    id: 2,
    username: 'Diana Jameson',
    nickname: null,
    profileIcon: '../../../assets/images/users/user8.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
  new MockUser({
    id: 3,
    username: 'Petar',
    nickname: null,
    profileIcon: '../../../assets/images/users/user3.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
  new MockUser({
    id: 4,
    username: 'Dejan',
    nickname: null,
    profileIcon: '../../../assets/images/users/user2.png',
    city: null,
    country: null,
    state: AWAY,
  }),
  new MockUser({
    id: 5,
    username: 'Jelena',
    nickname: null,
    profileIcon: '../../../assets/images/users/user1.png',
    city: null,
    country: null,
    state: DO_N0T_DISTURB,
  }),
  new MockUser({
    id: 6,
    username: 'Nikolina',
    nickname: null,
    profileIcon: '../../../assets/images/users/user5.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
  new MockUser({
    id: 7,
    username: 'Milos',
    nickname: null,
    profileIcon: '../../../assets/images/users/user7.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
  new MockUser({
    id: 8,
    username: 'Nenad',
    nickname: null,
    profileIcon: '../../../assets/images/users/user6.png',
    city: null,
    country: null,
    state: AWAY,
  }),
  new MockUser({
    id: 9,
    username: 'Sara',
    nickname: null,
    profileIcon: '../../../assets/images/users/user12.png',
    city: null,
    country: null,
    state: INVISIBLE,
  }),
  new MockUser({
    id: 10,
    username: 'Nenad',
    nickname: null,
    profileIcon: '../../../assets/images/users/user6.png',
    city: null,
    country: null,
    state: AWAY,
  }),
  new MockUser({
    id: 11,
    username: 'Milos',
    nickname: null,
    profileIcon: '../../../assets/images/users/user7.png',
    city: null,
    country: null,
    state: ACTIVE,
  }),
];
export const BADGES: Badge[] = [
  new Badge({
    id: 1,
    name: 'bolt',
    icon: '../../../../assets/images/logo.png',
    notification: 2,
  }),
  new Badge({
    id: 2,
    name: 'camera',
    icon: '../../../../assets/images/badge-icons/camera.png',
    notification: 0,
  }),
  new Badge({
    id: 3,
    name: 'smile',
    icon: '../../../../assets/images/badge-icons/smile.png',
    notification: 4,
  }),
  new Badge({
    id: 4,
    name: 'edit',
    icon: '../../../../assets/images/badge-icons/edit.png',
    notification: 0,
  }),
  new Badge({
    id: 5,
    name: 'friend',
    icon: '../../../../assets/images/badge-icons/avatar8.png',
    notification: 0,
  }),
  new Badge({
    id: 6,
    name: 'task',
    icon: '../../../../assets/images/badge-icons/task.png',
    notification: 0,
  }),
  new Badge({
    id: 7,
    name: 'cd',
    icon: '../../../../assets/images/badge-icons/cd.png',
    notification: 0,
  }),
  new Badge({
    id: 8,
    name: 'calendar',
    icon: '../../../../assets/images/badge-icons/calendar.png',
    notification: 2,
  }),
  new Badge({
    id: 9,
    name: 'rocket',
    icon: '../../../../assets/images/badge-icons/rocket.png',
    notification: 0,
  }),
  new Badge({
    id: 10,
    name: 'coffee',
    icon: '../../../../assets/images/badge-icons/coffee.png',
    notification: 0,
  }),
];
export const PLAYLIST: PlayItem[] = [
  new PlayItem({
    id: 1,
    song: 'The Past Starts Slow...',
    icon: '../../../../assets/images/playlist-icons/stars.jpg',
    singer: 'System of a Revenge',
    songDuration: '3:22',
  }),
  new PlayItem({
    id: 2,
    song: 'The Pretender',
    icon: '../../../../assets/images/playlist-icons/kung-fighters.jpg',
    singer: 'Kung Fighters',
    songDuration: '5:48',
  }),
  new PlayItem({
    id: 3,
    song: 'Blood Brothers',
    icon: '../../../../assets/images/playlist-icons/iron-maid.jpg',
    singer: 'Iron Maid',
    songDuration: '3:06',
  }),
  new PlayItem({
    id: 4,
    song: 'Seven Nation Army',
    icon: '../../../../assets/images/playlist-icons/black-stripes.jpg',
    singer: 'The Black Stripes',
    songDuration: '3:06',
  }),
  new PlayItem({
    id: 5,
    song: 'Killer Queen',
    icon: '../../../../assets/images/playlist-icons/archiduke.jpg',
    singer: 'The Black Stripes',
    songDuration: '3:06',
  }),
];
export const PHOTOS: Photo[] = [
  new Photo({
    id: 1,
    icon: '../../../../assets/images/last-photos/lake.jpg',
  }),
  new Photo({
    id: 2,
    icon: '../../../../assets/images/last-photos/beach.jpg',
  }),
  new Photo({
    id: 3,
    icon: '../../../../assets/images/last-photos/travel-friends.jpeg',
  }),
  new Photo({
    id: 4,
    icon: '../../../../assets/images/last-photos/freedom.jpg',
  }),
  new Photo({
    id: 5,
    icon: '../../../../assets/images/last-photos/fly.jpg',
  }),
  new Photo({
    id: 6,
    icon: '../../../../assets/images/last-photos/baloon.jpg',
  }),
  new Photo({
    id: 7,
    icon: '../../../../assets/images/last-photos/off-the-path.jpg',
  }),
  new Photo({
    id: 8,
    icon: '../../../../assets/images/last-photos/nature.jpg',
  }),
  new Photo({
    id: 9,
    icon: '../../../../assets/images/last-photos/pool.jpg',
  }),
];
export const ACTOR_VOTERS: ActorVote[] = [
  new ActorVote({
    id: 1,
    actor: 'Thomas Bale',
    votePercentage: 62,
    voters: [
      '../../../../assets/images/users/user1.png',
      '../../../../assets/images/users/user2.png',
      '../../../../assets/images/users/user3.png',
      '../../../../assets/images/users/user4.png',
      '../../../../assets/images/users/user5.png',
      '../../../../assets/images/users/user6.png',
      '../../../../assets/images/users/user7.png',
      '../../../../assets/images/users/user8.png',
      '../../../../assets/images/users/user14.png',
      '../../../../assets/images/users/user10.png',
      '../../../../assets/images/users/user11.png',
      '../../../../assets/images/users/user12.png',
    ],
  }),
  new ActorVote({
    id: 2,
    actor: 'Ben Robertson',
    votePercentage: 27,
    voters: [
      '../../../../assets/images/users/user7.png',
      '../../../../assets/images/users/user15.png',
      '../../../../assets/images/users/user14.png',
      '../../../../assets/images/users/user4.png',
      '../../../../assets/images/users/user10.png',
      '../../../../assets/images/users/user11.png',
      '../../../../assets/images/users/user12.png',
    ],
  }),
  new ActorVote({
    id: 3,
    actor: 'Michael Streiton',
    votePercentage: 11,
    voters: [
      '../../../../assets/images/users/user9.png',
      '../../../../assets/images/users/user13.png',
    ],
  }),
];
export const LOGGED_USER: MockUser = new MockUser({
  id: 1,
  username: 'James Splegel',
  nickname: 'Space cowboy',
  profileIcon: '../../../../assets/images/users-profile-icon.png',
  city: 'San Francisco',
  country: 'CA',
  state: ACTIVE,
});
export const POSTS: MockPost[] = [
  new MockPost({
    id: 1,
    upperId: 0,
    userId: 1,
    timeAgo: 19,
    userProfileIcon: '../../../../assets/images/users-profile-icon.png',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accunsantium doloremque.',
    badges: [
      'fas fa-trophy',
      'far fa-heart',
      'fas fa-comments',
      'fas fa-retweet',
    ],
    likes: [
      { name: 'Jenny', icon: '../../../../assets/images/users/user1.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user2.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user3.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user4.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user5.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user6.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user7.png' },
      { name: 'Robert', icon: '../../../../assets/images/users/user8.png' },
    ],
    message: 17,
    reply: 24,
  }),
  new MockPost({
    id: 2,
    upperId: 0,
    userId: 1,
    timeAgo: 7,
    userProfileIcon: '../../../../assets/images/users-profile-icon.png',
    description:
      "Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here's " +
      'one of them...leave a kind comment!',
    badges: ['far fa-heart', 'far fa-comment-alt', 'fas fa-retweet'],
    sharedPost: new MockPost({
      id: 3,
      upperId: 2,
      userId: 2,
      timeAgo: 16,
      userProfileIcon: '../../../assets/images/users/user8.png',
      postImage: '../../../../assets/images/post-icon/night2.jpg',
      description:
        "Here's the first photo of our incredible photoshoot from yesterday. If you like it please say so " +
        'and tell me what you wanna see next!',
      likes: [
        { name: 'Diana', icon: '../../../../assets/images/users/user9.png' },
        {
          name: 'Nicholas',
          icon: '../../../../assets/images/users/user13.png',
        },
        { name: 'Robert', icon: '../../../../assets/images/users/user1.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user2.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user3.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user4.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user5.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user6.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user7.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user8.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user14.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user10.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user11.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user12.png' },
        { name: 'Robert', icon: '../../../../assets/images/users/user7.png' },
      ],
      message: 0,
      reply: 16,
    }),
  }),
  new MockPost({
    id: 4,
    upperId: 0,
    userId: 2,
    timeAgo: 19,
    description:
      'You must have chaos within you to give birth to a dancing star. ~ Friedrich Nietzsche',
    message: 17,
    reply: 24,
  }),
];
