'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of twitter in back office', function() {
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

        it('should go to twitter configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Twitter.config_button, 90000)
                .click(this.selector.BO.Twitter.config_button)
                .call(done);
        });

        it('should click on twitter developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Twitter.website_field_input, 90000)
                .getAttribute(this.selector.BO.Twitter.website_field_input, 'value').then(function (website) {
                    global.website_url = website;
                })
                .waitForExist(this.selector.BO.Twitter.callback_field_input, 90000)
                .getAttribute(this.selector.BO.Twitter.callback_field_input, 'value').then(function (callback) {
                    global.callback_url = callback;
                })
                .waitForExist(this.selector.BO.Twitter.developers_link, 90000)
                .click(this.selector.BO.Twitter.developers_link)
                .call(done);
        });
    });

    describe('Access to the twitter site', function (done) {

        it('should click on signin button', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                    return this.switchTab(handles[handles.length - 1])
                })
                .waitForExist(this.external.FO.Twitter.signein_button, 3000)
                .click(this.external.FO.Twitter.signein_button)
                .call(done);
        });

        it('should access to the account twitter', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.signein_login_input, 90000)
                .setValue(this.external.FO.Twitter.signein_login_input,"prestotests+twitter@gmail.com" )
                .setValue(this.external.FO.Twitter.signein_password_input,"presto_tests" )
                .waitForExist(this.external.FO.Twitter.signein_connect_input, 90000)
                .click(this.external.FO.Twitter.signein_connect_input)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.app_link, 90000)
                .click(this.external.FO.Twitter.app_link)
                .call(done);
        });

        it('should click on settings tab', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.settings_tab, 90000)
                .click(this.external.FO.Twitter.settings_tab)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.website_url_input, 90000)
                .setValue(this.external.FO.Twitter.website_url_input, global.website_url)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.callback_url_input, 90000)
                .setValue(this.external.FO.Twitter.callback_url_input, global.callback_url)
                .call(done);
        });

        it('should click on update settings button', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.update_settings_button, 90000)
                .click(this.external.FO.Twitter.update_settings_button)
                .pause(5000)
                .call(done);
        });

        it('should go to keys and access tokens', function (done) {
            this.client
                .waitForExist(this.external.FO.Twitter.key_and_access_tokens_tab, 90000)
                .click(this.external.FO.Twitter.key_and_access_tokens_tab)
                .waitForExist(this.external.FO.Twitter.customer_api_key, 90000)
                .getText(this.external.FO.Twitter.customer_api_key).then(function(key){
                    global.api_key = key;
                })
                .waitForExist(this.external.FO.Twitter.customer_api_secret, 90000)
                .getText(this.external.FO.Twitter.customer_api_secret).then(function(secret){
                    global.api_secret= secret;
                })
                .getTabIds().then(function(handles){
                    return this.switchTab(handles[0])
                })
                .call(done);
        });
    });

    describe('Return to the configuration twitter page', function (done) {

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Twitter.customer_key_input, 90000)
                .setValue(this.selector.BO.Twitter.customer_key_input, global.api_key)
                .setValue(this.selector.BO.Twitter.customer_secret_input, global.api_secret)
                .call(done);
        });

        it('should save twitter configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Twitter.save_button, 90000)
                .click(this.selector.BO.Twitter.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});