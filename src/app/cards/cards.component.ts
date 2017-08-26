import {Component, OnInit} from "@angular/core";
import {CardService} from "../card/card.service";
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducers";
// import * as fromCard from '../card/store/card.reducers';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  _cards;

  constructor(private cardService: CardService,
              private store: Store<fromApp.AppState>) {
    this._cards = this.store.map((state: fromApp.AppState) => {
      return cardService.getCards(state.auth, state.card);
    });
  }

  ngOnInit() {
    // this._cards = this.cardService.getCards();
  }

}
