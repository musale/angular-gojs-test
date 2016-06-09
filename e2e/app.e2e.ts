import { AngularGojsTestPage } from './app.po';

describe('angular-gojs-test App', function() {
  let page: AngularGojsTestPage;

  beforeEach(() => {
    page = new AngularGojsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-gojs-test works!');
  });
});
