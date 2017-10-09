'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of pinterest in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.external = externals.selector;
        this.client.call(done);
    });
    // process.on('uncaughtException', common.take_screenshot);
    // process.on('ReferenceError', common.take_screenshot);
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
                // .waitForExist(this.selector.modules_installed)
                // .click(this.selector.modules_installed)
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

        it('should access to pinterest configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Pinterest.config_button, 90000)
                .click(this.selector.BO.Pinterest.config_button)
                .call(done);
        });

        it('should go to pinterest developers link', function (done) {

            this.client
                // .waitForExist(this.selector.pinterest.website_field_input, 90000)
                // .getAttribute(this.selector.pinterest.website_field_input, 'value').then(function (website) {
                //     global.website_url = website;
                //     console.log(global.website_url);
                // })
                // .waitForExist(this.selector.pinterest.callback_field_input, 90000)
                // .getAttribute(this.selector.pinterest.callback_field_input, 'value').then(function (callback) {
                //     global.callback_url = callback;
                //     console.log(global.callback_url);
                // })
                .waitForExist(this.selector.BO.Pinterest.developers_link, 90000)
                .click(this.selector.BO.Pinterest.developers_link)
                //.call(done);
        });

        it('should access to the account pinterest', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Pinterest.username_input, 90000)
                .setValue(this.external.FO.Pinterest.username_input,"prestotests+pinterest@gmail.com" )
                .setValue(this.external.FO.Pinterest.password_input,"presto_tests" )
                .waitForExist(this.external.FO.Pinterest.login_button, 90000)
                .click(this.external.FO.Pinterest.login_button)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Pinterest.app_link, 90000)
                .click(this.external.FO.Pinterest.app_link)
                .call(done);
        });

        // it('should click on settings tab', function (done) {
        //     this.client
        //         .waitForExist(this.external.FO.Pinterest.settings_tab, 90000)
        //         .click(this.external.FO.Pinterest.settings_tab)
        //         .call(done);
        // });
        //
        // it('should enter the website url', function (done) {
        //     this.client
        //         .waitForExist(this.external.FO.Pinterest.website_url_input, 90000)
        //         .setValue(this.external.FO.Pinterest.website_url_input, global.website_url)
        //         .call(done);
        // });
        //
        // it('should enter the callback url', function (done) {
        //     this.client
        //         .waitForExist(this.external.FO.Pinterest.callback_url_input, 90000)
        //         .setValue(this.external.FO.Pinterest.callback_url_input, global.callback_url)
        //         .call(done);
        // });
        //
        // it('should click on update settings button', function (done) {
        //     this.client
        //         .waitForExist(this.external.FO.Pinterest.update_settings_button, 90000)
        //         .click(this.external.FO.Pinterest.update_settings_button)
        //         .pause(5000)
        //         .call(done);
        // });
        //
        // it('should go to keys and access tokens', function (done) {
        //     this.client
        //         .waitForExist(this.external.FO.Pinterest.key_and_access_tokens_tab, 90000)
        //         .click(this.external.FO.Pinterest.key_and_access_tokens_tab)
        //         .waitForExist(this.external.FO.Pinterest.customer_api_key, 90000)
        //         .getText(this.external.FO.Pinterest.customer_api_key).then(function(key){
        //             global.api_key = key;
        //             console.log(global.api_key);
        //         })
        //         .waitForExist(this.external.FO.Pinterest.customer_api_secret, 90000)
        //         .getText(this.external.FO.Pinterest.customer_api_secret).then(function(secret){
        //             global.api_secret= secret;
        //             console.log(global.api_secret);
        //         })
        //         .getTabIds().then(function(handles){
        //             return this.switchTab(handles[0])
        //         })
        //         .call(done);
        // });
    });

    describe('Return to the configuration pinterest page', function (done) {

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Pinterest.customer_key_input, 90000)
                .setValue(this.selector.BO.Pinterest.customer_key_input, global.api_key)
                .setValue(this.selector.BO.Pinterest.customer_secret_input, global.api_secret)
                .call(done);
        });

        it('should save pinterest configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Pinterest.save_button, 90000)
                .click(this.selector.BO.Pinterest.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
