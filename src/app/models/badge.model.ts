export class Badge {

  private _id: number;
  private _name: string;
  private _icon: string;
  private _notification?: number;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._name = obj && obj.name;
    this._icon = obj && obj.icon;
    this._notification = obj && obj.notification;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get notification(): number {
    return this._notification;
  }

  set notification(value: number) {
    this._notification = value;
  }
}
