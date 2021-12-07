import { Badge } from './badge.model';
import { Comment } from './comment.model';

export interface Post {
  body?: string;
  id?: number;
  title?: string;
  userId?: number;
  comments?: Comment[];
  badges?: Badge[];
  likes?: any[];
  username?: string;
  timeAgo?: number;
}

export class MockPost {
  private _id: number;
  private _upperId: number;
  private _userId: number;
  private _postUsername: string;
  private _userProfileIcon: string;
  private _timeAgo: number;
  private _description: string;
  private _badges: Badge[];
  private _postImage?: string;
  private _sharedPost?: MockPost;
  private _likes?: any[];
  private _message: number;
  private _reply: number;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._upperId = obj && obj.upperId;
    this._userId = obj && obj.userId;
    this._postUsername = obj && obj.postUsername;
    this._userProfileIcon = obj && obj.userProfileIcon;
    this._timeAgo = obj && obj.timeAgo;
    this._description = obj && obj.description;
    this._badges = obj && obj.badges;
    this._postImage = obj && obj.postImage;
    this._sharedPost = obj && obj.sharedPost;
    this._likes = obj && obj.likes;
    this._message = obj && obj.message;
    this._reply = obj && obj.reply;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get upperId(): number {
    return this._upperId;
  }

  set upperId(value: number) {
    this._upperId = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get postUsername(): string {
    return this._postUsername;
  }

  set postUsername(value: string) {
    this._postUsername = value;
  }

  get userProfileIcon(): string {
    return this._userProfileIcon;
  }

  set userProfileIcon(value: string) {
    this._userProfileIcon = value;
  }

  get timeAgo(): number {
    return this._timeAgo;
  }

  set timeAgo(value: number) {
    this._timeAgo = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get badges(): Badge[] {
    return this._badges;
  }

  set badges(value: Badge[]) {
    this._badges = value;
  }

  get postImage(): string {
    return this._postImage;
  }

  set postImage(value: string) {
    this._postImage = value;
  }

  get sharedPost(): MockPost {
    return this._sharedPost;
  }

  set sharedPost(value: MockPost) {
    this._sharedPost = value;
  }

  get likes(): any[] {
    return this._likes;
  }

  set likes(value: any[]) {
    this._likes = value;
  }

  get message(): number {
    return this._message;
  }

  set message(value: number) {
    this._message = value;
  }

  get reply(): number {
    return this._reply;
  }

  set reply(value: number) {
    this._reply = value;
  }
}
