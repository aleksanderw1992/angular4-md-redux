import {User} from "./user";
import {ErrorOrResult} from "../common/ErrorOrResult";
import {Md5} from 'ts-md5/dist/md5';
import {FormUserLogin, FormUserSignUp} from "./form-user";


export class UserService {

  trySignUp(formUser: FormUserSignUp, users: User[]): ErrorOrResult {
    let usersWithSameUserName = users.filter((u) => u.username === formUser.username).length;
    if (usersWithSameUserName > 0) {
      return ErrorOrResult.createError("User already exists")
    }
    let hashedPassword = Md5.hashStr(formUser.password);
    delete formUser.password;//'security'
    let user = new User();
    user.username = formUser.username
    user.surname = formUser.surname
    user.hashedPassword = hashedPassword + ''
    user.firstname = formUser.firstname
    return ErrorOrResult.createResult(user)
  }

  tryLogin(formUser: FormUserLogin, users: User[]): ErrorOrResult {
    let userFullyMatched = users.filter((u) => u.username === formUser.username && u.hashedPassword === Md5.hashStr(formUser.password));
    let count = userFullyMatched.length
    if (count > 1) {
      return ErrorOrResult.createError('more than one user found')
    }
    if (count === 1) {
      return ErrorOrResult.createResult(userFullyMatched[0])
    }
    //count ===0
    let userMatchedByUsername = users.filter((u) => u.username === formUser.username)
    let countByUsername = userMatchedByUsername.length
    if (countByUsername === 1) {
      return ErrorOrResult.createError('wrong password')
    }
    return ErrorOrResult.createError('no such user')
  }

}
