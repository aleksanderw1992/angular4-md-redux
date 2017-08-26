import {Injectable} from "@angular/core";
import {UserService} from "../auth/user.service";
import {AuthenticatedUserService} from "../auth/authenticatedUser.service";

@Injectable()
export class CardColorsService {


  private previousResult:any;
  private previousUser:any;

  constructor(private userService: UserService,
              private authenticatedUserService: AuthenticatedUserService) {}



  getColorsTranslation(username: string|null) {
    if(this.previousUser === this.authenticatedUserService.getUsernameOrNull()){
      return this.previousResult
    }

    let result={}

    //currently no nice solution in TS!
    let cardColorExcludingInitial = ['red', 'yellow', 'green', 'blue', 'orange', 'pink'];
    // let usernames = this.userService.users.filter(u=>u.username!=username).map(u=>u.username);
    let usernames = 'this.userService.users.filter(u=>u.username!=username).map(u=>u.username)';
    let randomInd = Math.floor(Math.random() * cardColorExcludingInitial.length);
    let randomColor = cardColorExcludingInitial.splice(randomInd,1);

    result[username]=randomColor
    for (let i =0; i<usernames.length;i++){
      let currentUsername = usernames[i]
      let color= cardColorExcludingInitial[i%cardColorExcludingInitial.length]
      result[currentUsername]=color
    }
    this.previousResult=result
    this.previousUser=username
    return result
  }
}

