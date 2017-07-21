'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Check config of module google analytics', function () {
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
                .setValue(this.selector.modules_search, module_tech_name)
                .click(this.selector.modules_search_button)
                .waitForExist(this.selector.module_tech_name, 90000)
                .call(done);
        });

        it('should click on configure button', function (done) {
            this.client
                .waitForExist(this.selector.module_tech_name, 90000)
                .click(this.selector.configure_module_btn)
                .waitForExist(this.selector.googleanalytics_tracking_id, 90000)
                .pause(2000)
                .call(done);
        });

        it('should enter Google Analytics Tracking ID', function (done) {
            this.client
                .waitForExist(this.selector.googleanalytics_tracking_id, 90000)
                .setValue(this.selector.googleanalytics_tracking_id, tracking_id)
                .call(done);
        });

        it('should Enable User ID tracking', function (done) {
            this.client
                .waitForExist(this.selector.enable_user_id_tracking, 90000)
                .click(this.selector.enable_user_id_tracking, 90000)
                .call(done);
        });

        it('should click on <button Save>', function (done) {
            this.client
                .waitForExist(this.selector.googleanalytics_submit_btn, 90000)
                .click(this.selector.googleanalytics_submit_btn, 90000)
                .call(done);
        });

        it('should check the account ID', function (done) {

            this.client
                .waitForExist(this.selector.account_id_green_block, 90000)
                .getText(this.selector.account_id_green_block).then(function(text) {
                    should(text).be.equal(""
                +'×\nAccount ID updated successfully'+
                "")
                })
                .call(done);
        });

        it('should check the user ID', function (done) {

            this.client
                .waitForExist(this.selector.user_id_green_block, 90000)
                .getText(this.selector.user_id_green_block).then(function(text) {
                    should(text).be.equal(""
                        +'×\nSettings for User ID updated successfully'+
                        "")
                })
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        });
    });
});	