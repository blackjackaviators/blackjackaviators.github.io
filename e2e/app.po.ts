export class BlackjackAviatorsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blackjack-aviators-app h1')).getText();
  }
}
