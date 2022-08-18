import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getLoginForm() {
    return element(by.deepCss('form[formGroup]="loginForm"')).getWebElement();
  }
}
