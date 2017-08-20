import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";
import {CardColorsService} from "./card-colors.service";


@Injectable()
export class CardService{

  private _cards: Array<Card>=[];

  constructor(private authenticatedUserService: AuthenticatedUserService,
  private cardColorsService: CardColorsService) {}

  addCard(content){
    this._cards.push(new Card(this.authenticatedUserService.authenticatedUser, content));
    // console.log(this._cards)
  }

  public getCards(): Array<DisplayCard> {
    let initialCard = new DisplayCard('right', 'first-card', 'asdf asdf', 'Welcome to Chat Application. Please login in order to write messages');
    let otherCards = this._cards.map(card=> this.translateFromCardToDisplayCard(card));
    otherCards.unshift(initialCard)
    return otherCards
  }
  translateFromCardToDisplayCard(card: Card):DisplayCard{
    var user
    let isCardUsers= this.authenticatedUserService.hasAuthenticatedUser() && this.authenticatedUserService.authenticatedUser.username === card.user.username;
    let displayName = User.getDisplayName(card.user)
    let cardColor = this.cardColorsService.getColorsTranslation(this.authenticatedUserService.getUsernameOrNull())[card.user.username];
    return new DisplayCard(isCardUsers? 'left':'right', cardColor, displayName, card.content)
    // return null;
  }
}
