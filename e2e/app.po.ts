export class BlackjackSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blackjack-site-app h1')).getText();
  }
}
