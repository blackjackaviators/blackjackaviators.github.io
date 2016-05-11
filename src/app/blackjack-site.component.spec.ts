import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BlackjackSiteAppComponent } from '../app/blackjack-site.component';

beforeEachProviders(() => [BlackjackSiteAppComponent]);

describe('App: BlackjackSite', () => {
  it('should create the app',
      inject([BlackjackSiteAppComponent], (app: BlackjackSiteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'blackjack-site works!\'',
      inject([BlackjackSiteAppComponent], (app: BlackjackSiteAppComponent) => {
    expect(app.title).toEqual('blackjack-site works!');
  }));
});
