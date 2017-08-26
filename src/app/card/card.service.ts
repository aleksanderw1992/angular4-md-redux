import {Card} from "./card";
import {DisplayCard} from "./diaply-card";
import {Injectable} from "@angular/core";
import {User} from "../auth/user";
import {CardColorsService} from "./card-colors.service";
import {AddCardWithContentAction} from "./store/card.actions";
import * as fromApp from '../store/app.reducers';
import {Store} from "@ngrx/store";


@Injectable()
export class CardService {


  constructor(private cardColorsService: CardColorsService,
              private store: Store<fromApp.AppState>) {
  }

  addCard(content) {
    this.store.dispatch(new AddCardWithContentAction(content))
  }

  public getCards(fromAuthState, fromCardState): Array<DisplayCard> {
    let initialCard = fromCardState.initialCard;
    let otherCards = fromCardState.cards.map(card => this.translateFromCardToDisplayCard(card, fromAuthState));
    otherCards.unshift(initialCard)
    return otherCards
  }

  translateFromCardToDisplayCard(card: Card, fromAuthState): DisplayCard {
    let isCardUsers = fromAuthState.authenticatedUser && fromAuthState.authenticatedUser.username === card.user.username;
    let displayName = User.getDisplayName(card.user)
    let cardColor = this.cardColorsService.getColorsTranslation(fromAuthState)[card.user.username];
    return new DisplayCard(isCardUsers ? 'left' : 'right', cardColor, card.content, displayName)
  }
}
