import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";

@Injectable()
export class CardService{
  public getCards(): Array<DisplayCard> {
    return [
      new DisplayCard('left', 'red', 'asdf asdf', 'Aleksander Wojcik'),
      new DisplayCard('right', 'yellow', 'asdf asdf', 'Aleksander Wojcik2'),
      new DisplayCard('left', 'red', 'asdf asdf xxx', 'Aleksander Wojcik3')
    ];
  }
}
