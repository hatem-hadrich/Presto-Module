'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of tumblr in back office', function() {
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
        it('should access to tumblr configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Tumblr.config_button, 90000)
                .click(this.selector.BO.Tumblr.config_button)
                .call(done);
        });

        it('should go to tumblr developers link', function (done) {

            this.client
                .waitForExist(this.selector.BO.Tumblr.website_url_input, 90000)
                .getAttribute(this.selector.BO.Tumblr.website_url_input, 'value').then(function (website) {
                    global.website_url = website;
                })
                .waitForExist(this.selector.BO.Tumblr.callback_url_input, 90000)
                .getAttribute(this.selector.BO.Tumblr.callback_url_input, 'value').then(function (callback) {
                    global.callback_url = callback;
                })
                .waitForExist(this.selector.BO.Tumblr.developers_link, 90000)
                .click(this.selector.BO.Tumblr.developers_link)
                .call(done);
        });

        it('should enter the email of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForVisible(this.external.FO.Tumblr.username_input, 90000)
                .setValue(this.external.FO.Tumblr.username_input, 'prestotests+tumblr@gmail.com')
                .waitForExist(this.external.FO.Tumblr.next_button, 90000)
                .click(this.external.FO.Tumblr.next_button)
                .call(done);
        });

        it('should enter the password of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.external.FO.Tumblr.password_input, 90000)
                .setValue(this.external.FO.Tumblr.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Tumblr.signin_button, 90000)
                .click(this.external.FO.Tumblr.signin_button)
                .pause(2000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Tumblr.app_link, 90000)
                .click(this.external.FO.Tumblr.app_link)
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Tumblr.customer_key, 90000)
                .getText(this.external.FO.Tumblr.customer_key).then(function(key){
                global.api_key = key;
            })
                .waitForExist(this.external.FO.Tumblr.show_secret_button, 90000)
                .click(this.external.FO.Tumblr.show_secret_button)
                .waitForExist(this.external.FO.Tumblr.customer_secret, 90000)
                .getText(this.external.FO.Tumblr.customer_secret).then(function(secret){
                global.api_secret = secret;
            })
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.external.FO.Tumblr.website_url_input, 90000)
                .setValue(this.external.FO.Tumblr.website_url_input, global.website_url)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.external.FO.Tumblr.callback_url_input, 90000)
                .setValue(this.external.FO.Tumblr.callback_url_input, global.callback_url)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .waitForExist(this.external.FO.Tumblr.save_button, 90000)
                .click(this.external.FO.Tumblr.save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Tumblr.customer_key_input, 90000)
                .setValue(this.selector.BO.Tumblr.customer_key_input, global.api_key)
                .setValue(this.selector.BO.Tumblr.customer_secret_input, global.api_secret)
                .call(done);
        });

        it('should save tumblr configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Tumblr.save_button, 90000)
                .click(this.selector.BO.Tumblr.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
