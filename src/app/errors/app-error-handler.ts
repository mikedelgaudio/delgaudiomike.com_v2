import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert("Sorry, an unexpected error has occured. Please head back to the homepage and try again.");
    console.warn("Unexpected error: " + error);
  }
}
