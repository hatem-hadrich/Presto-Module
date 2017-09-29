'use strict';
var should = require('should');
var common = require('../../common/common.webdriverio');


describe('Allscenario', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    // enable the favicon notification module
    require('./scenario/BO/enable_module.js');

    // Test case n°1 = Check Favicon in Front Office
    require('./scenario/FO/check_favicon.webdriverio');

});
