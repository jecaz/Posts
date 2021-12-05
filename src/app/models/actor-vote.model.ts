export class ActorVote {

  private _id: number;
  private _actor: string;
  private _voters: string[];
  private _votePercentage: number;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._actor = obj && obj.actor;
    this._voters = obj && obj.voters;
    this._votePercentage = obj && obj.votePercentage;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get actor(): string {
    return this._actor;
  }

  set actor(value: string) {
    this._actor = value;
  }

  get voters(): string[] {
    return this._voters;
  }

  set voters(value: string[]) {
    this._voters = value;
  }

  get votePercentage(): number {
    return this._votePercentage;
  }

  set votePercentage(value: number) {
    this._votePercentage = value;
  }
}
