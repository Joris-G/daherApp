import { browser, WebDriver } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { IWebDriverCookie } from 'selenium-webdriver';
import { LoginPage } from './login.po';

describe('Home page', () => {
  let page: LoginPage;
  // let authService: AuthService

  beforeEach(async () => {
    page = new LoginPage();
  });

  it('should have login form', () => {
    page.navigateTo();
    expect(browser.wait(
      protractor.ExpectedConditions.urlContains('login')
    ));
    // expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
} else {
  it('should show home page', () => {

});
  }
