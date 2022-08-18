import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
