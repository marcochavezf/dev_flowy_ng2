export class DevFlowyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dev-flowy-app p')).getText();
  }
}
