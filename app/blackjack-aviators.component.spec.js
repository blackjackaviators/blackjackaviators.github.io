"use strict";
var testing_1 = require('@angular/core/testing');
var blackjack_aviators_component_1 = require('../app/blackjack-aviators.component');
testing_1.beforeEachProviders(function () { return [blackjack_aviators_component_1.BlackjackAviatorsAppComponent]; });
testing_1.describe('App: BlackjackAviators', function () {
    testing_1.it('should create the app', testing_1.inject([blackjack_aviators_component_1.BlackjackAviatorsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'blackjack-aviators works!\'', testing_1.inject([blackjack_aviators_component_1.BlackjackAviatorsAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('blackjack-aviators works!');
    }));
});
//# sourceMappingURL=blackjack-aviators.component.spec.js.map