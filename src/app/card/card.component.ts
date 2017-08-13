import {Component, Input, OnInit} from '@angular/core';
import {DisplayCard} from "./diaply-card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  private displayCard: DisplayCard;

  constructor() { }

  ngOnInit() {
  }

}
