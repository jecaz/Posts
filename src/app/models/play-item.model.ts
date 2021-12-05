export class PlayItem {

  private _id: number;
  private _song: string;
  private _icon: string;
  private _singer: string;
  private _songDuration: string;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._song = obj && obj.song;
    this._icon = obj && obj.icon;
    this._singer = obj && obj.singer;
    this._songDuration = obj && obj.songDuration;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get song(): string {
    return this._song;
  }

  set song(value: string) {
    this._song = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get singer(): string {
    return this._singer;
  }

  set singer(value: string) {
    this._singer = value;
  }

  get songDuration(): string {
    return this._songDuration;
  }

  set songDuration(value: string) {
    this._songDuration = value;
  }
}
