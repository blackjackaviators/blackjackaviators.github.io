import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BlackjackAviatorsAppComponent } from '../app/blackjack-aviators.component';

beforeEachProviders(() => [BlackjackAviatorsAppComponent]);

describe('App: BlackjackAviators', () => {
  it('should create the app',
      inject([BlackjackAviatorsAppComponent], (app: BlackjackAviatorsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'blackjack-aviators works!\'',
      inject([BlackjackAviatorsAppComponent], (app: BlackjackAviatorsAppComponent) => {
    expect(app.title).toEqual('blackjack-aviators works!');
  }));
});
