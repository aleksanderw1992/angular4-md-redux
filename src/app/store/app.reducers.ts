import * as fromAuth from "../auth/store/auth.reducers";
import * as fromCard from "../card/store/card.reducers";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  auth: fromAuth.State,
  card: fromCard.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  card: fromCard.cardReducer
}
