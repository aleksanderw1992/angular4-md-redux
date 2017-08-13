export declare type DiplayDirection = 'left'|'right';

export class DisplayCard {
  private displayDirection: DiplayDirection;
  private color: string;
  private content: string;
  private userHeading: string;


  constructor(diplayDirection: DiplayDirection, color: string, content: string, userHeading: string) {
    this.displayDirection = diplayDirection;
    this.color = color;
    this.content = content;
    this.userHeading = userHeading;
  }

}
