'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of foursquare in back office', function() {
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

        it('should access to foursquare configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Foursquare.config_button, 90000)
                .click(this.selector.BO.Foursquare.config_button)
                .call(done);
        });

        it('should go to foursquare developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Foursquare.welcome_page_url_input, 90000)
                .getAttribute(this.selector.BO.Foursquare.welcome_page_url_input, 'value').then(function (url) {
                global.welcome_page = url;
            })
                .waitForExist(this.selector.BO.Foursquare.privacy_policy_url_input, 90000)
                .getAttribute(this.selector.BO.Foursquare.privacy_policy_url_input, 'value').then(function (url) {
                global.privacy_policy = url;
            })
                .waitForExist(this.selector.BO.Foursquare.redirect_url_input, 90000)
                .getAttribute(this.selector.BO.Foursquare.redirect_url_input, 'value').then(function (url) {
                global.redirect_url = url;
            })
                .waitForExist(this.selector.BO.Foursquare.developers_link, 90000)
                .click(this.selector.BO.Foursquare.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to foursquare account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Foursquare.username_input, 90000)
                .setValue(this.external.FO.Foursquare.username_input, 'prestotests+foursquare@gmail.com')
                .setValue(this.external.FO.Foursquare.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Foursquare.allow_button, 90000)
                .click(this.external.FO.Foursquare.allow_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Foursquare.app_link, 90000)
                .click(this.external.FO.Foursquare.app_link)
                .pause(5000)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .waitForExist(this.external.FO.Foursquare.customer_key_pre, 90000)
                .getText(this.external.FO.Foursquare.customer_key_pre).then(function (key) {
                global.foursquare_customer_key = key;
            })
                .waitForExist(this.external.FO.Foursquare.customer_secret_pre, 90000)
                .getText(this.external.FO.Foursquare.customer_secret_pre).then(function (secret) {
                global.foursquare_customer_secret = secret;
            })
                .waitForExist(this.external.FO.Foursquare.update_button, 90000)
                .click(this.external.FO.Foursquare.update_button)
                .pause(5000)
                .call(done);
        });

        it('should enter the application uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Foursquare.application_uri_input, 90000)
                .setValue(this.external.FO.Foursquare.application_uri_input, global.welcome_page)
                .pause(5000)
                .call(done);
        });

        it('should enter the privacy policy url', function (done) {
            this.client
                .waitForExist(this.external.FO.Foursquare.privacy_policy_url_input, 90000)
                .setValue(this.external.FO.Foursquare.privacy_policy_url_input, global.privacy_policy)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect url', function (done) {
            this.client
                .waitForExist(this.external.FO.Foursquare.redirect_url_input, 90000)
                .setValue(this.external.FO.Foursquare.redirect_url_input, global.redirect_url)
                .pause(5000)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.external.FO.Foursquare.save_button)
                .click(this.external.FO.Foursquare.save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                    this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Foursquare.customer_key_input, 90000)
                .setValue(this.selector.BO.Foursquare.customer_key_input, global.foursquare_customer_key)
                .setValue(this.selector.BO.Foursquare.customer_secret_input, global.foursquare_customer_secret)
                .call(done);
        });

        it('should save foursquare configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Foursquare.save_button, 90000)
                .click(this.selector.BO.Foursquare.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
