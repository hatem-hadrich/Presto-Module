'use strict';
var should = require('should');
var common = require('./common.webdriverio');


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

    // Test case n°1.1 = Configure the module cookie banner in Back Office
    require('./scenario/BO/default_configuration.webdriverio.js');
    require('./scenario/FO/check_default_cookie_banner.webdriverio.js');
    // Test case n°2.1 = Configure the module cookie banner in Back Office
    require('./scenario/BO/edit_configuration.webdriverio.js');
    require('./scenario/FO/check_edited_cookie_banner.webdriverio.js');

});
