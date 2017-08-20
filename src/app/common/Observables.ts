import {Subject} from "rxjs/Subject";

export class Observables {
  private _cardAdded = new Subject<void>();
  public cardAdded = this._cardAdded.asObservable();

  public notifyCardAdded() {
    this._cardAdded.next();
  }
}
