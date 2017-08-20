import {User} from "../auth/user";
export class Card {
  private _user: User;
  private _content: string;
  // private order: number;


  constructor(user: User, content: string) {
    this._user = user;
    this._content = content;
  }

  get user(): User {
    return this._user;
  }

  get content(): string {
    return this._content;
  }
}
