'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of linkedin in back office', function() {
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

        it('should access to linkedin configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Linkedin.config_button, 90000)
                .click(this.selector.BO.Linkedin.config_button)
                .call(done);
        });

        it('should go to linkedin developers link', function (done) {

            this.client
                .waitForExist(this.selector.BO.Linkedin.website_url_input, 90000)
                .getAttribute(this.selector.BO.Linkedin.website_url_input, 'value').then(function (url) {
                global.website_url = url;
            })
                .waitForExist(this.selector.BO.Linkedin.developers_link, 90000)
                .click(this.selector.BO.Linkedin.developers_link)
                .call(done);
        });

        it('should click on identify button', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Linkedin.identify_button, 90000)
                .click(this.external.FO.Linkedin.identify_button)
                .call(done);
        });

        it('should access to the linkedin account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.external.FO.Linkedin.username_input, 90000)
                .setValue(this.external.FO.Linkedin.username_input, 'prestotestslinkedin@gmail.com')
                .setValue(this.external.FO.Linkedin.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Linkedin.signin_button, 90000)
                .click(this.external.FO.Linkedin.signin_button)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Linkedin.app_link, 90000)
                .click(this.external.FO.Linkedin.app_link)
                .call(done);
        });

        it('should click on preferences menu', function (done) {
            this.client
                .getText(this.external.FO.Linkedin.customer_key_span).then(function (key) {
                global.linkedin_customer_key = key;
            })
                .getText(this.external.FO.Linkedin.customer_secret_span).then(function (secret) {
                global.linkedin_customer_secret = secret;
            })
                .waitForExist(this.external.FO.Linkedin.preferences_button, 90000)
                .click(this.external.FO.Linkedin.preferences_button)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.external.FO.Linkedin.website_url_input, 90000)
                .click(this.external.FO.Linkedin.website_url_input)
                .setValue(this.external.FO.Linkedin.website_url_input, global.website_url)
                .call(done);
        });

        it('should click on update button', function (done) {
            this.client
                .moveToObject(this.external.FO.Linkedin.update_button)
                .click(this.external.FO.Linkedin.update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Linkedin.customer_key_input, 90000)
                .setValue(this.selector.BO.Linkedin.customer_key_input, global.linkedin_customer_key)
                .setValue(this.selector.BO.Linkedin.customer_secret_input, global.linkedin_customer_secret)
                .call(done);
        });

        it('should save linkedin configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Linkedin.save_button, 90000)
                .click(this.selector.BO.Linkedin.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
