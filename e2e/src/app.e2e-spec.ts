import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to home page', () => {
    page.navigateTo();
    expect(browser.wait(
      protractor.ExpectedConditions.urlContains('home')
    ));
    // expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});
