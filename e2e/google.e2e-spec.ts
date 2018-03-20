import { AppPage } from './app.po';
import {browser, element} from 'protractor';
import {expect} from "chai";

describe('travis-ex App', () => {

  const searchQuery = 'reward ops';
  const titleMatch = 'reward ops - Google Search';

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('should go to google', (done) => {
    browser.get('https://www.google.com/ncr');
    browser.findElement({name: 'q'})
      .sendKeys(searchQuery + '\n')
      .then(() => {
        element({name: 'btnG'}).isPresent();
      }).then(() => {
        browser.findElement({name: 'btnG'})
          .click()
          .then(function () {
            browser.wait(function () {
              return browser.isElementPresent({id: 'top_nav'});
            }, 5000);
            browser.getTitle()
              .then((title) => {
                expect(title).to.equal(titleMatch);
                done();
              });
          });

      });
  });
});
