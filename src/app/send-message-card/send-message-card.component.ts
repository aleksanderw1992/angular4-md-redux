import {Component, OnInit, ViewChild} from "@angular/core";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";
import {CardService} from "../card/card.service";
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducers";

@Component({
  selector: 'app-send-message-card',
  templateUrl: './send-message-card.component.html',
  styleUrls: ['./send-message-card.component.css']
})
export class SendMessageCardComponent implements OnInit {
  @ViewChild('fSendCard') public fSendCard: NgForm;

  constructor(private authenticatedUserService: AuthenticatedUserService,
              private cardService: CardService,
              private store: Store<fromApp.AppState>) {
  }


  ngOnInit() {
    this.store.select('card').subscribe(() => {
      this.fSendCard.form.reset();
    })
  }

  getUserDisplayName() {
    return this.authenticatedUserService.getAuthenticatedUser().map(user => {
      return user ? User.getDisplayName(user) :
        ' ';
    });
  }

  send(fSendCard) {
    this.cardService.addCard(fSendCard.value.message)
  }

  disableSendBtn(fSendCard) {
    let message = fSendCard.value.message;
    return this.authenticatedUserService.hasAuthenticatedUser().map(hasAuthenticatedUser => {
      return !hasAuthenticatedUser || !message
    })
  }
}
