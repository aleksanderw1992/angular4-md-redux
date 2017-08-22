import * as CardActions from './card.actions';
import {Card} from "../card";
import {DisplayCard} from "../diaply-card";

export interface State {
  cards: Card[];
  initialCard: DisplayCard;
}
const initialState: State = {
  cards: [],
  initialCard: new DisplayCard('right', 'first-card', 'Please login in order to write messages', 'Welcome to Chat Application',)
}

export function cardReducer(state = initialState, action: CardActions.CardActions) {
  switch (action.type) {
    case CardActions.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
  }
}
