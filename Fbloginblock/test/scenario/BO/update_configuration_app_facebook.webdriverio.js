'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of facebook in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.external = externals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL + '/backoffice/')
                .waitForExist(this.selector.BO.AccessPage.login_input, 120000)
                .setValue(this.selector.BO.AccessPage.login_input, email)
                .waitForExist(this.selector.BO.AccessPage.password_input, 120000)
                .setValue(this.selector.BO.AccessPage.password_input, password)
                .waitForExist(this.selector.BO.AccessPage.login_button, 90000)
                .click(this.selector.BO.AccessPage.login_button)
                .waitForExist(this.selector.BO.Common.menu, 60000)
                .call(done);
        });
    });

    describe('Access to the module configuration page', function (done) {
        it('should go to modules installed page', function (done) {
            this.client
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .setValue(this.selector.BO.ModulesPage.search_input, module_tech_name_socialConnect)
                    .click(this.selector.BO.ModulesPage.search_button)
                    .call(done);
            }
        });

        it('should click on configuration button', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.BO.ModulesPage.module_tech_name, 90000)
                    .waitForExist(this.selector.BO.ModulesPage.configuration_button,90000)
                    .click(this.selector.BO.ModulesPage.configuration_button)
                    .call(done);
            }
        });
    });

    describe('Access to the configuration page', function (done) {

        it('should go to facebook configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Facebook.config_button, 90000)
                .click(this.selector.BO.Facebook.config_button)
                .call(done);
        });

        // it('should click on facebook developers link', function (done) {
        //     this.client
        //         .waitForExist(this.selector.BO.Facebook.site_url_input, 90000)
        //         .getAttribute(this.selector.BO.Facebook.site_url_input, 'value').then(function (site) {
        //             global.site_url = site;
        //         })
        //         .waitForExist(this.selector.BO.Facebook.developers_link, 90000)
        //         .click(this.selector.BO.Facebook.developers_link)
        //         .pause(3000)
        //         .call(done);
        // });
    });

    // describe('Access to the facebook site', function (done) {
    //
    //     it('should access to the account facebook', function (done) {
    //         this.client
    //             .getTabIds().then(function (handles) {
    //             return this.switchTab(handles[handles.length - 1])
    //         })
    //             .waitForExist(this.external.FO.Facebook.username_input, 90000)
    //             .setValue(this.external.FO.Facebook.username_input,"prestotestsfacebook@yahoo.com" )
    //             .setValue(this.external.FO.Facebook.password_input,"presto_tests" )
    //             .waitForExist(this.external.FO.Facebook.signin_button, 90000)
    //             .click(this.external.FO.Facebook.signin_button)
    //             .pause(5000)
    //             .call(done);
    //     });
    //
    //     it('should access to the app PrestoAppSocialConnect', function (done) {
    //         this.client
    //             .waitForExist(this.external.FO.Facebook.app_link, 90000)
    //             .click(this.external.FO.Facebook.app_link)
    //             .call(done);
    //     });
    //
    //     it('should click on settings menu', function (done) {
    //         this.client
    //             .waitForExist(this.external.FO.Facebook.settings_menu, 90000)
    //             .click(this.external.FO.Facebook.settings_menu)
    //             .call(done);
    //     });
    //
    //     it('should enter the website url', function (done) {
    //         this.client
    //             .waitForExist(this.external.FO.Facebook.customer_api_key, 90000)
    //             .getText(this.external.FO.Facebook.customer_api_key).then(function(key){
    //             global.customer_key = key;
    //             console.log(global.customer_key)
    //         })
    //             .waitForExist(this.external.FO.Facebook.show_secret_button, 90000)
    //             .click(this.external.FO.Facebook.show_secret_button)
    //             .pause(3000)
    //             .waitForExist(this.external.FO.Facebook.customer_api_secret, 90000)
    //             .getText(this.external.FO.Facebook.customer_api_secret).then(function(secret){
    //             global.customer_secret= secret;
    //             console.log(global.customer_secret)
    //         })
    //             .waitForExist(this.external.FO.Facebook.site_url_input, 90000)
    //             .setValue(this.external.FO.Facebook.site_url_input, global.site_url)
    //             .call(done);
    //     });
    //
    //     it('should click on save changes button', function (done) {
    //         this.client
    //             .waitForExist(this.external.FO.Facebook.save_button, 90000)
    //             .click(this.external.FO.Facebook.save_button)
    //             .pause(5000)
    //             .getTabIds().then(function(handles){
    //             return this.switchTab(handles[0])
    //         })
    //             .call(done);
    //     });
    //
    // });

    describe('Return to the configuration facebook page', function (done) {

        // it('should enter the customer key and secret', function (done) {
        //     this.client
        //         .waitForExist(this.selector.BO.Facebook.customer_key_input, 90000)
        //         .setValue(this.selector.BO.Facebook.customer_key_input, global.customer_key)
        //         .setValue(this.selector.BO.Facebook.customer_secret_input, global.customer_secret)
        //         .call(done);
        // });

        it('should save facebook configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Facebook.save_button, 90000)
                .click(this.selector.BO.Facebook.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
