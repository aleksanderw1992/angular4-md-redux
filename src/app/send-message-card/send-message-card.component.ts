import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";
import {CardService} from "../card/card.service";
import {Observables} from "../common/Observables";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-send-message-card',
  templateUrl: './send-message-card.component.html',
  styleUrls: ['./send-message-card.component.css']
})
export class SendMessageCardComponent implements OnInit {
  @ViewChild('fSendCard') public fSendCard: NgForm;

  constructor(private authenticatedUserService: AuthenticatedUserService,
  private cardService: CardService,
              private observables: Observables) {
  }


  ngOnInit() {
    this.observables.cardAdded.subscribe(()=>{
      this.fSendCard.form.reset();
    })
  }

  getUserDisplayName() {
    return this.authenticatedUserService.hasAuthenticatedUser()?
      User.getDisplayName(this.authenticatedUserService.authenticatedUser):
      ' ';
  }

  send(fSendCard) {
    this.cardService.addCard(fSendCard.value.message)
  }
  disableSendBtn(fSendCard){
    let message = fSendCard.value.message;
    return !this.authenticatedUserService.hasAuthenticatedUser() || !message
  }
}
