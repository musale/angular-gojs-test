export class AngularGojsTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-gojs-test-app h1')).getText();
  }
}
