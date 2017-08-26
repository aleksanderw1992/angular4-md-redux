import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import * as fromApp from "../../store/app.reducers";
import "rxjs/add/operator/withLatestFrom";
import {Store} from "@ngrx/store";
import * as fromCardActions from "./card.actions";
import {Card} from "../card";

@Injectable()
export class CardEffects {
  constructor(private actions$: Actions,
              private store: Store<fromApp.AppState>) {
  }

  @Effect()
  addCard$ = this.actions$
    .ofType(fromCardActions.ADD_CARD_WITH_CONTENT)
    .withLatestFrom(this.store)
    .map(([action, storeState]: [fromCardActions.AddCardWithContentAction, fromApp.AppState]) => {
      return {
        type: fromCardActions.ADD_CARD,
        payload: new Card(storeState.auth.authenticatedUser, action.payload.content)
      }

    });


}
