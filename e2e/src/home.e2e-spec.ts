import { browser, WebDriver } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { IWebDriverCookie } from 'selenium-webdriver';
import { HomePage } from './home.po';

describe('Home page', () => {
  let page: HomePage;
  let token: IWebDriverCookie;
  // let authService: AuthService

  beforeEach(async () => {
    page = new HomePage();
    browser.manage().getCookie('token')
      .then((cookie) => {
        token = cookie;
      });
  });

  if (!token) {
    it('should redirect to login page', () => {
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



});
