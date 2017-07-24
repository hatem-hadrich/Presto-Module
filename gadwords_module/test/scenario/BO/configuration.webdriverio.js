'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°1 : Check config of module google adwords', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('Check module', function (done) {
        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            this.client
                .setValue(this.selector.modules_search, global.module_tech_name)
                .click(this.selector.modules_search_button)
                .waitForExist(this.selector.module_tech_name, 90000)
                .call(done);
        });

        it('should click on configure button', function (done) {
            this.client
                .waitForExist(this.selector.module_tech_name, 90000)
                .click(this.selector.configure_module_btn)
                .call(done);
        });

        it('should check Google AdWords promotional code', function (done) {
            this.client
                .waitForExist(this.selector.gadwords_voucher, 90000)
                .getText(this.selector.gadwords_voucher).then(function(voucher) {
                    if (voucher == "") {
                        done(new Error("Google AdWords promotional code is empty"));
                    }
                })
                .call(done);
        });

        it('should click on button Start your campaign now with your promotional code ', function (done) {
            this.client
                .waitForExist(this.selector.gadwords_voucher, 90000)
                .click(this.selector.gadwords_start_btn, 90000)
                .call(done);
        });

        it('should check the url target', function (done) {
            this.client
                .pause(2000)
                .getAttribute(this.selector.gadwords_start_btn, 'href').then(function (url) {
                    var currentUrl = url;
                    should(currentUrl).be.equal("http://www.google.co.uk/ads/get/prestashop75/index.html");
                })
                .getAttribute(this.selector.gadwords_start_btn, 'target').then(function (target) {
                    var path = target;
                    should(path).be.equal("_blank");
                })
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});	