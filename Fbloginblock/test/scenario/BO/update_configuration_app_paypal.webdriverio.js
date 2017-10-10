'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of paypal in back office', function() {
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

        it('should access to paypal configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Paypal.config_button, 90000)
                .click(this.selector.BO.Paypal.config_button)
                .call(done);
        });

        it('should go to paypal developers link', function (done) {

            this.client
                .waitForExist(this.selector.BO.Paypal.return_url_input, 90000)
                .getAttribute(this.selector.BO.Paypal.return_url_input, 'value').then(function (url) {
                global.return_url = url;
            })
                .waitForExist(this.selector.BO.Paypal.privacy_policy_url_input, 90000)
                .getAttribute(this.selector.BO.Paypal.privacy_policy_url_input, 'value').then(function (url) {
                global.privacy_policy_url = url;
            })
                .waitForExist(this.selector.BO.Paypal.user_agreement_url_input, 90000)
                .getAttribute(this.selector.BO.Paypal.user_agreement_url_input, 'value').then(function (url) {
                global.user_agreement_url = url;
            })
                .waitForExist(this.selector.BO.Paypal.developers_link, 90000)
                .click(this.selector.BO.Paypal.developers_link)
                .call(done);
        });

        it('should click on log into dashboard button', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Paypal.log_inti_dashboard_button, 90000)
                .click(this.external.FO.Paypal.log_inti_dashboard_button)
                .call(done);
        });

        it('should access to the paypal account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.external.FO.Paypal.username_input, 90000)
                .setValue(this.external.FO.Paypal.username_input, 'prestotests+paypal@gmail.com')
                .setValue(this.external.FO.Paypal.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Paypal.login_button, 90000)
                .click(this.external.FO.Paypal.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .moveToObject(this.external.FO.Paypal.manage_api_button)
                .waitForExist(this.external.FO.Paypal.app_link, 90000)
                .click(this.external.FO.Paypal.app_link)
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .moveToObject(this.external.FO.Paypal.customer_key, 90000)
                .getText(this.external.FO.Paypal.customer_key).then(function (id) {
                global.paypal_customer_key = id;
                console.log(global.paypal_customer_key);
            })
                .waitForExist(this.external.FO.Paypal.show_secret_button, 90000)
                .click(this.external.FO.Paypal.show_secret_button)
                .pause(7000)
                .moveToObject(this.external.FO.Paypal.customer_secret)
                .getText(this.external.FO.Paypal.customer_secret).then(function (value) {
                global.paypal_customer_secret = value;
                console.log(global.paypal_customer_secret);
            })
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .moveToObject(this.external.FO.Paypal.log_in_with_paypal_checkbox, 90000)
                .click(this.external.FO.Paypal.show_return_url_button)
                .pause(5000)
                .call(done);
        });

        it('should enter the return url', function (done) {
            this.client
                .waitForExist(this.external.FO.Paypal.return_url_input, 90000)
                .click(this.external.FO.Paypal.return_url_input)
                .setValue(this.external.FO.Paypal.return_url_input, global.return_url)
                .call(done);
        });

        it('should click on advanced options button', function (done) {
            this.client
                .moveToObject(this.external.FO.Paypal.feedback_button)
                .waitForExist(this.external.FO.Paypal.advanced_options_button, 90000)
                .click(this.external.FO.Paypal.advanced_options_button)
                .call(done);
        });

        it('should configure the links shown on customer consent page', function (done) {
            this.client
                .waitForVisible(this.external.FO.Paypal.privacy_policy_url_input, 90000)
                .setValue(this.external.FO.Paypal.privacy_policy_url_input, global.privacy_policy_url)
                .waitForVisible(this.external.FO.Paypal.user_agreement_url_input, 90000)
                .setValue(this.external.FO.Paypal.user_agreement_url_input, global.user_agreement_url)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.external.FO.Paypal.feedback_button)
                .waitForExist(this.external.FO.Paypal.save_button, 90000)
                .click(this.external.FO.Paypal.save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Paypal.customer_key_input, 90000)
                .setValue(this.selector.BO.Paypal.customer_key_input, global.paypal_customer_key)
                .setValue(this.selector.BO.Paypal.customer_secret_input, global.paypal_customer_secret)
                .call(done);
        });

        it('should save paypal configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Paypal.save_button, 90000)
                .click(this.selector.BO.Paypal.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
