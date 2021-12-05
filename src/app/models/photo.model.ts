export class Photo {

  private _id: number;
  private _icon: string;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._icon = obj && obj.icon;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
