export interface User {
  id?: number;
  name?: string;
  username?: string;
}

export class MockUser {
  private _id: number;
  private _username: string;
  private _nickname?: string;
  private _profileIcon?: string;
  private _city?: string;
  private _country?: string;
  private _state?: string;
  private posts?: string;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._username = obj && obj.username;
    this._nickname = obj && obj.nickname;
    this._profileIcon = obj && obj.profileIcon;
    this._city = obj && obj.city;
    this._country = obj && obj.country;
    this._state = obj && obj.state;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get profileIcon(): string {
    return this._profileIcon;
  }

  set profileIcon(value: string) {
    this._profileIcon = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
