import {CardColor} from "./card-colors";
export declare type DisplayDirection = 'left' | 'right';

export class DisplayCard {
  private displayDirection: DisplayDirection;
  private color: CardColor;
  private content: string;
  private userHeading: string;


  constructor(diplayDirection: DisplayDirection, color: CardColor, content: string, userHeading: string) {
    this.displayDirection = diplayDirection;
    this.color = color;
    this.content = content;
    this.userHeading = userHeading;
  }

}
