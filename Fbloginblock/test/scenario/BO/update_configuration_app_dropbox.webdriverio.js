'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of dropbox in back office', function() {
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
        it('should access to dropbox configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Dropbox.config_button, 90000)
                .click(this.selector.BO.Dropbox.config_button)
                .call(done);
        });

        it('should go to dropbox developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Dropbox.redirect_uri_input, 90000)
                .getAttribute(this.selector.BO.Dropbox.redirect_uri_input, 'value').then(function (url) {
                global.redirect_uri = url;
            })
                .waitForExist(this.selector.BO.Dropbox.developers_link, 90000)
                .click(this.selector.BO.Dropbox.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to dropbox account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Dropbox.username_input, 90000)
                .setValue(this.external.FO.Dropbox.username_input, 'prestotests+dropbox@gmail.com')
                .setValue(this.external.FO.Dropbox.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Dropbox.login_button, 90000)
                .click(this.external.FO.Dropbox.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Dropbox.app_link, 90000)
                .click(this.external.FO.Dropbox.app_link)
                .pause(5000)
                .call(done);
        });

        it('should delete the old redirect uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Dropbox.app_key_div, 90000)
                .getText(this.external.FO.Dropbox.app_key_div).then(function (key) {
                global.dropbox_customer_key = key;
            })
                .waitForExist(this.external.FO.Dropbox.app_secret_div, 90000)
                .getAttribute(this.external.FO.Dropbox.app_secret_div, 'data-app-secret').then(function (secret) {
                global.dropbox_customer_secret = secret;
            })
                .waitForExist(this.external.FO.Dropbox.delete_redirect_uri, 90000)
                .click(this.external.FO.Dropbox.delete_redirect_uri)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Dropbox.redirect_uri_input, 90000)
                .setValue(this.external.FO.Dropbox.redirect_uri_input, global.redirect_uri)
                .click(this.external.FO.Dropbox.redirect_uri_add_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Dropbox.api_key_input, 90000)
                .setValue(this.selector.BO.Dropbox.api_key_input, global.dropbox_customer_key)
                .setValue(this.selector.BO.Dropbox.api_secret_input, global.dropbox_customer_secret)
                .call(done);
        });

        it('should save dropbox configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Dropbox.save_button, 90000)
                .click(this.selector.BO.Dropbox.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
