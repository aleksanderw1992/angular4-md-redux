import {Component, OnInit} from '@angular/core';
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";

@Component({
  selector: 'app-send-message-card',
  templateUrl: './send-message-card.component.html',
  styleUrls: ['./send-message-card.component.css']
})
export class SendMessageCardComponent implements OnInit {

  constructor(private authenticatedUserService: AuthenticatedUserService) {
  }


  ngOnInit() {
  }

  getUserDisplayName() {
    return this.authenticatedUserService.hasAuthenticatedUser()?
      User.getDisplayName(this.authenticatedUserService.authenticatedUser):
      ' ';
  }

  send(fSendCard) {
    console.log(fSendCard)
    console.log(fSendCard.value)
  }
}
