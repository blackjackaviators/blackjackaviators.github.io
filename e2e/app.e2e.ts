import { BlackjackAviatorsPage } from './app.po';

describe('blackjack-aviators App', function() {
  let page: BlackjackAviatorsPage;

  beforeEach(() => {
    page = new BlackjackAviatorsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blackjack-aviators works!');
  });
});
