import {Action} from "@ngrx/store";
import {Card} from "../card";

export const ADD_CARD='ADD_CARD';
export const ADD_CARD_WITH_CONTENT='ADD_CARD_WITH_CONTENT';

export class AddCardAction implements Action{
  readonly type = ADD_CARD;

  constructor(public payload: { card: Card }) {
  }
}
export class AddCardWithContentAction implements Action{
  readonly type = ADD_CARD_WITH_CONTENT;

  constructor(public payload: { content: string }) {
  }
}

export type CardActions = AddCardAction|AddCardWithContentAction;
