'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of google in back office', function() {
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

        it('should access to google configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Google.config_button, 90000)
                .click(this.selector.BO.Google.config_button)
                .call(done);
        });

        it('should go to google developers link', function (done) {

            this.client
                .waitForExist(this.selector.BO.Google.authorized_javaScript_origins_input, 90000)
                .getAttribute(this.selector.BO.Google.authorized_javaScript_origins_input, 'value').then(function (javascript_url) {
                    global.authorized_javascript_url = javascript_url;
                })
                .waitForExist(this.selector.BO.Google.authorized_redirect_uri_input, 90000)
                .getAttribute(this.selector.BO.Google.authorized_redirect_uri_input, 'value').then(function (redirect_uri) {
                    global.authorized_redirect_uri = redirect_uri;
                })
                .waitForExist(this.selector.BO.Google.developers_link, 90000)
                .click(this.selector.BO.Google.developers_link)
                .call(done);
        });

        it('should enter the google email', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                    return this.switchTab(handles[handles.length - 1])
                })
                .waitForExist(this.external.FO.Google.username_input, 90000)
                .setValue(this.external.FO.Google.username_input, 'prestotests@gmail.com')
                .waitForExist(this.external.FO.Google.identifier_next_button, 90000)
                .click(this.external.FO.Google.identifier_next_button)
                .call(done);
        });

        it('should enter the google password', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.external.FO.Google.password_input, 90000)
                .setValue(this.external.FO.Google.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Google.password_next_button, 90000)
                .click(this.external.FO.Google.password_next_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.app_link, 90000)
                .click(this.external.FO.Google.app_link)
                .call(done);
        });

        it('should go to identifiants menu', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.settings_button, 90000)
                .click(this.external.FO.Google.settings_button)
                .waitForExist(this.external.FO.Google.api_and_services_menu, 90000)
                .moveToObject(this.external.FO.Google.api_and_services_menu)
                .waitForExist(this.external.FO.Google.identifiants_submenu, 90000)
                .click(this.external.FO.Google.identifiants_submenu)
                .pause(3000)
                .call(done);
        });

        it('should click on create identifiant', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.create_identifiant_button, 90000)
                .click(this.external.FO.Google.create_identifiant_button)
                .pause(3000)
                .waitForExist(this.external.FO.Google.identifiant_customer_oauth_link, 90000)
                .click(this.external.FO.Google.identifiant_customer_oauth_link)
                .call(done);
        });

        it('should select web application', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.application_web_checkbox, 90000)
                .click(this.external.FO.Google.application_web_checkbox)
                .call(done);
        });

        it('should enter the authorized javaScript origins', function (done) {
            this.client
                .waitForVisible(this.external.FO.Google.authorized_javaScript_input, 90000)
                .pause(5000)
                .click(this.external.FO.Google.authorized_javaScript_input)
                .keys(global.authorized_javascript_url)
                .click(this.external.FO.Google.click_outside_p)
                .call(done);
        });

        it('should enter the authorized redirect uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.authorized_redirect_input, 90000)
                .pause(5000)
                .click(this.external.FO.Google.authorized_redirect_input)
                .keys(global.authorized_redirect_uri)
                .click(this.external.FO.Google.click_outside_p)
                .call(done);
        });

        it('should click on create button', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.create_button, 90000)
                .click(this.external.FO.Google.create_button)
                .pause(5000)
                .call(done);
        });

        it('should click on OK button', function (done) {
            this.client
                .waitForExist(this.external.FO.Google.api_key, 90000)
                .getText(this.external.FO.Google.api_key).then(function(key){
                global.google_customer_key = key;
            })
                .waitForExist(this.external.FO.Google.api_secret, 90000)
                .getText(this.external.FO.Google.api_secret).then(function(secret){
                global.google_customer_secret= secret;
            })
                .waitForExist(this.external.FO.Google.ok_button, 90000)
                .click(this.external.FO.Google.ok_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });
    });

    describe('Return to the configuration google page', function (done) {

        it('should enter the customer id and secret', function (done) {
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.BO.Google.customer_key_input, 90000)
                .setValue(this.selector.BO.Google.customer_key_input, global.google_customer_key)
                .setValue(this.selector.BO.Google.customer_secret_input, global.google_customer_secret)
                .call(done);
        });

        it('should save google configurations', function (done) {
            this.client
                .scroll(0, 1800)
                .waitForExist(this.selector.BO.Google.save_button, 90000)
                .click(this.selector.BO.Google.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
