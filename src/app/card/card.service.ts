import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";
import {CardColorsService} from "./card-colors.service";
import {Observables} from "../common/Observables";


@Injectable()
export class CardService {

  private _cards: Array<Card> = [];

  constructor(private authenticatedUserService: AuthenticatedUserService,
              private cardColorsService: CardColorsService,
              private observables: Observables) {
  }

  addCard(content) {
    this._cards.push(new Card(this.authenticatedUserService.authenticatedUser, content));
    this.observables.notifyCardsChanged()
  }

  public getCards(): Array<DisplayCard> {
    let initialCard = new DisplayCard('right', 'first-card','Please login in order to write messages', 'Welcome to Chat Application', );
    let otherCards = this._cards.map(card => this.translateFromCardToDisplayCard(card));
    otherCards.unshift(initialCard)
    return otherCards
  }

  translateFromCardToDisplayCard(card: Card): DisplayCard {
    let isCardUsers = this.authenticatedUserService.hasAuthenticatedUser() && this.authenticatedUserService.authenticatedUser.username === card.user.username;
    let displayName = User.getDisplayName(card.user)
    let cardColor = this.cardColorsService.getColorsTranslation(this.authenticatedUserService.getUsernameOrNullStr())[card.user.username];
    return new DisplayCard(isCardUsers ? 'left' : 'right', cardColor, card.content, displayName)
    // return null;
  }
}
