import { BlackjackSitePage } from './app.po';

describe('blackjack-site App', function() {
  let page: BlackjackSitePage;

  beforeEach(() => {
    page = new BlackjackSitePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blackjack-site works!');
  });
});
