import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";


@Injectable()
export class CardService{

  private _cards: Array<Card>=[];

  constructor(private authenticatedUserService: AuthenticatedUserService) {}

  addCard(content){
    this._cards.push(new Card(this.authenticatedUserService.authenticatedUser, content));
    console.log(this._cards)
  }

  public getCards(): Array<DisplayCard> {
    return [
      new DisplayCard('left', 'red', 'asdf asdf', 'Aleksander Wojcik'),
      new DisplayCard('right', 'yellow', 'asdf asdf', 'Aleksander Wojcik2'),
      new DisplayCard('left', 'red', 'asdf asdf xxx', 'Aleksander Wojcik3')
    ];
  }
}
