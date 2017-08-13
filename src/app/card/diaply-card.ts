import {CardColor} from "./card-colors";
export declare type DiplayDirection = 'left'|'right';

export class DisplayCard {
  private displayDirection: DiplayDirection;
  private color: CardColor;
  private content: string;
  private userHeading: string;


  constructor(diplayDirection: DiplayDirection, color: CardColor, content: string, userHeading: string) {
    this.displayDirection = diplayDirection;
    this.color = color;
    this.content = content;
    this.userHeading = userHeading;
  }

}
