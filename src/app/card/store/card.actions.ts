import {Action} from "@ngrx/store";
import {Card} from "../card";

export const ADD_CARD='ADD_CARD';

export class AddCardAction implements Action{
  readonly type = ADD_CARD;

  constructor(public payload: { card: Card }) {
  }
}

export type CardActions = AddCardAction;
