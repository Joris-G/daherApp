import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable({ providedIn: "root" })
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    // const loggingService = this.injector.get(LoggingService);
    const message = error.message ? error.message : error.toString();
    // log on the server
    // loggingService.log({ message });
    console.error(message);
    // });
    throw error;
  }
}
