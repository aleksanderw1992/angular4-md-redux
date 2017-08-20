import {Injectable} from "@angular/core";
import {User} from "./user";
import {ErrorOrResult} from "../common/ErrorOrResult";
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class UserService {


  private _users: Array<User>=[];

  add(data): ErrorOrResult {
    let usersWithSameUserName = this._users.filter((u) => u.username === data.username).length;
    if (usersWithSameUserName>0){
      return ErrorOrResult.createError("User already exists")
    }
    let hashedPassword = Md5.hashStr(data.password);
    delete data.password;
    data.hashedPassword=hashedPassword;
    this._users.push(data)
    return ErrorOrResult.createResult(data)
  }

  findUser(username, password) :ErrorOrResult{
    let userFullyMatched = this._users.filter((u) => u.username === username && u.hashedPassword === Md5.hashStr(password));
    let count = userFullyMatched.length
    if (count > 1) {
      return ErrorOrResult.createError('more than one user found')
    }
    if (count === 1) {
      return ErrorOrResult.createResult(userFullyMatched[0])
    }
    //count ===0
    let userMatchedByUsername = this._users.filter((u) => u.username === username)
    let countByUsername = userMatchedByUsername.length
    if (countByUsername === 1) {
      return ErrorOrResult.createError('wrong password')
    }
    return ErrorOrResult.createError('no such user')
  }


  get users(): Array<User> {
    return this._users;
  }
}
