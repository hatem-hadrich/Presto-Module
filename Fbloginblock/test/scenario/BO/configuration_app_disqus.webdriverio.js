'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of disqus in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.external = externals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL + '/backoffice/')
                .waitForExist(this.selector.BO.AccessPage.login_input, 120000)
                .setValue(this.selector.BO.AccessPage.login_input, 'remi.gaillard@prestashop.com')
                .waitForExist(this.selector.BO.AccessPage.password_input, 120000)
                .setValue(this.selector.BO.AccessPage.password_input, 'abcd1234')
                .waitForExist(this.selector.BO.AccessPage.login_button, 90000)
                .click(this.selector.BO.AccessPage.login_button)
                .waitForExist(this.selector.BO.Common.menu, 60000)
                .call(done);
        });
    });

    describe('Access to the module page', function (done) {
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
    });

    describe('Access to the configuration page', function (done) {

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
        it('should access to disqus configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Disqus.config_button, 90000)
                .click(this.selector.BO.Disqus.config_button)
                .call(done);
        });

        it('should go to disqus developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Disqus.website_url_input, 90000)
                .getAttribute(this.selector.BO.Disqus.website_url_input, 'value').then(function (url) {
                global.website_url = url;
                console.log(global.website_url)
            })
                .waitForExist(this.selector.BO.Disqus.callback_url_input, 90000)
                .getAttribute(this.selector.BO.Disqus.callback_url_input, 'value').then(function (url) {
                global.callback_url = url;
                console.log(global.callback_url)
            })
                .waitForExist(this.selector.BO.Disqus.terms_of_service_url_input, 90000)
                .getAttribute(this.selector.BO.Disqus.terms_of_service_url_input, 'value').then(function (url) {
                global.terms_of_service_url = url;
                console.log(global.terms_of_service_url)
            })
                .waitForExist(this.selector.BO.Disqus.developers_link, 90000)
                .click(this.selector.BO.Disqus.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to disqus account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Disqus.username_input, 90000)
                .setValue(this.external.FO.Disqus.username_input, 'prestotests+disqus@gmail.com')
                .setValue(this.external.FO.Disqus.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Disqus.login_button, 90000)
                .click(this.external.FO.Disqus.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.app_link, 90000)
                .click(this.external.FO.Disqus.app_link)
                .pause(5000)
                .call(done);
        });

        it('should access to the settings', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.api_key_pre, 90000)
                .getText(this.external.FO.Disqus.api_key_pre).then(function (key) {
                global.disqus_customer_key = key;
            })
                .waitForExist(this.external.FO.Disqus.api_secret_pre, 90000)
                .getText(this.external.FO.Disqus.api_secret_pre).then(function (secret) {
                global.disqus_customer_secret = secret;
            })
                .waitForExist(this.external.FO.Disqus.settings_subtab, 90000)
                .click(this.external.FO.Disqus.settings_subtab)
                .pause(5000)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.website_input, 90000)
                .setValue(this.external.FO.Disqus.website_input, global.website_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.callback_input, 90000)
                .setValue(this.external.FO.Disqus.callback_input, global.callback_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the terms of service url', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.terms_of_service_input, 90000)
                .setValue(this.external.FO.Disqus.terms_of_service_input, global.terms_of_service_url)
                .pause(5000)
                .call(done);
        });

        it('should click on save changes button', function (done) {
            this.client
                .waitForExist(this.external.FO.Disqus.save_changes_button, 90000)
                .click(this.external.FO.Disqus.save_changes_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Disqus.api_key_input, 90000)
                .setValue(this.selector.BO.Disqus.api_key_input, global.disqus_customer_key)
                .setValue(this.selector.BO.Disqus.api_secret_input, global.disqus_customer_secret)
                .call(done);
        });

        it('should save disqus configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Disqus.save_button, 90000)
                .click(this.selector.BO.Disqus.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
