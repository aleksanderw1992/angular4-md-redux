import {Component, OnInit} from '@angular/core';
import {CardService} from "../card/card.service";
import {DisplayCard} from "../card/diaply-card";
import {Observables} from "../common/Observables";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private _cards: Array<DisplayCard>;


  constructor(private cardService: CardService,
              private observables: Observables) {
    observables.cardAdded.subscribe(() => {
      this._cards = this.cardService.getCards();
    })
  }

  ngOnInit() {
    this._cards = this.cardService.getCards();
  }

}
