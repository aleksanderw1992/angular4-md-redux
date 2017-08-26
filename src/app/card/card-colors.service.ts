import {Injectable} from "@angular/core";
import {UserService} from "../auth/user.service";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";
import {User} from "../auth/user";

@Injectable()
export class CardColorsService {

/*
it should be calculated on login/logout
 */
  getColorsTranslation(fromAuthState) {
    let username = User.getUsernameOrNull(fromAuthState.authenticatedUser);
    let result={}

    //currently no nice solution in TS!
    let cardColorExcludingInitial = ['red', 'yellow', 'green', 'blue', 'orange', 'pink'];
    let usernames = fromAuthState.users.filter(u=>u.username!=username).map(u=>u.username);
    let randomInd = Math.floor(Math.random() * cardColorExcludingInitial.length);
    let randomColor = cardColorExcludingInitial.splice(randomInd,1);

    result[username]=randomColor
    for (let i =0; i<usernames.length;i++){
      let currentUsername = usernames[i]
      let color= cardColorExcludingInitial[i%cardColorExcludingInitial.length]
      result[currentUsername]=color
    }
    return result
  }
}

