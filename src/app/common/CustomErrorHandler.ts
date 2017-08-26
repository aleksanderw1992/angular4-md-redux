import {ErrorHandler} from "@angular/core";
export class CustomErrorHandler {
  private static handler = new ErrorHandler()

  static handleError(error: string) {
    CustomErrorHandler.handler.handleError(error)
    alert("Error occurred: " + error + ' !')
  }
}
