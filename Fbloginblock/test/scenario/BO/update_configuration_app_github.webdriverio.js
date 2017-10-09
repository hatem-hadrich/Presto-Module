'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of github in back office', function() {
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

        it('should access to github configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Github.config_button, 90000)
                .click(this.selector.BO.Github.config_button)
                .call(done);
        });

        it('should go to github developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Github.home_page_url_input, 90000)
                .getAttribute(this.selector.BO.Github.home_page_url_input, 'value').then(function (url) {
                global.home_page = url;
            })
                .waitForExist(this.selector.BO.Github.callback_url_input, 90000)
                .getAttribute(this.selector.BO.Github.callback_url_input, 'value').then(function (url) {
                global.callback_url = url;
            })
                .waitForExist(this.selector.BO.Github.developers_link, 90000)
                .click(this.selector.BO.Github.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to github account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Github.username_input, 90000)
                .setValue(this.external.FO.Github.username_input, 'prestotests+github@gmail.com')
                .setValue(this.external.FO.Github.password_input, 'presto_tests1')
                .waitForExist(this.external.FO.Github.allow_button, 90000)
                .click(this.external.FO.Github.allow_button)
                .pause(5000)
                .call(done);
        });

        it('should click on button cancel', function (done) {
            this.client
                .waitForExist(this.external.FO.Github.cancel_button, 90000)
                .click(this.external.FO.Github.cancel_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Github.app_link, 90000)
                .click(this.external.FO.Github.app_link)
                .pause(5000)
                .call(done);
        });

        it('should enter the application uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Github.customer_key_dd, 90000)
                .getText(this.external.FO.Github.customer_key_dd).then(function (key) {
                global.github_customer_key = key;
            })
                .waitForExist(this.external.FO.Github.customer_secret_dd, 90000)
                .getText(this.external.FO.Github.customer_secret_dd).then(function (secret) {
                global.github_customer_secret = secret;
            })
                .moveToObject(this.external.FO.Github.update_button, 90000)
                .waitForExist(this.external.FO.Github.application_url_input, 90000)
                .setValue(this.external.FO.Github.application_url_input, global.home_page)
                .pause(5000)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.external.FO.Github.application_callback_url_input, 90000)
                .setValue(this.external.FO.Github.application_callback_url_input, global.callback_url)
                .pause(5000)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .waitForExist(this.external.FO.Github.update_button, 90000)
                .click(this.external.FO.Github.update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Github.customer_key_input, 90000)
                .setValue(this.selector.BO.Github.customer_key_input, global.github_customer_key)
                .setValue(this.selector.BO.Github.customer_secret_input, global.github_customer_secret)
                .call(done);
        });

        it('should save github configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Github.save_button, 90000)
                .click(this.selector.BO.Github.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
