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

    // Test case n°1 = Configure the module cookie banner in Back Office
    require('./scenario/BO/configure_module');
    require('./scenario/FO/check_cookie_banner.webdriverio');
    //require('./scenario/BO/configure1_module');
    //require('./scenario/FO/check_cookie_banner1.webdriverio');

});
