import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";
import {CardColorsService} from "./card-colors.service";
import {AddCardAction} from "./store/card.actions";


@Injectable()
export class CardService {

  private _cards: Array<Card> = [];

  constructor(private authenticatedUserService: AuthenticatedUserService,
              private cardColorsService: CardColorsService) {
  }

  addCard(content) {
    //todo add effects and create two actions :)
    this.store.dispatch(new AddCardAction(content))
  }

  public getCards(fromAuthState, fromCardState): Array<DisplayCard> {
    let initialCard = fromCardState.initialCard;
    let otherCards = this._cards.map(card => this.translateFromCardToDisplayCard(card, fromAuthState));
    otherCards.unshift(initialCard)
    return otherCards
  }

  translateFromCardToDisplayCard(card: Card, fromAuthState): DisplayCard {
    let isCardUsers = fromAuthState.authenticatedUser && fromAuthState.authenticatedUser.username === card.user.username;
    let displayName = User.getDisplayName(card.user)
    let cardColor = this.cardColorsService.getColorsTranslation(fromAuthState)[card.user.username];
    return new DisplayCard(isCardUsers ? 'left' : 'right', cardColor, card.content, displayName)
    // return null;
  }
}
