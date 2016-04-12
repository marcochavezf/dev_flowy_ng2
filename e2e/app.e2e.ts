import { DevFlowyPage } from './app.po';

describe('dev-flowy App', function() {
  let page: DevFlowyPage;

  beforeEach(() => {
    page = new DevFlowyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dev-flowy Works!');
  });
});
