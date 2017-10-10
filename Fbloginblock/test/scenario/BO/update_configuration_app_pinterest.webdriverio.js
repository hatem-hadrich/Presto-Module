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

        it('should access to pinterest configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Pinterest.config_button, 90000)
                .click(this.selector.BO.Pinterest.config_button)
                .call(done);
        });

        it('should go to pinterest developers link', function (done) {

            this.client
                .waitForExist(this.selector.BO.Pinterest.site_url_input, 90000)
                .getAttribute(this.selector.BO.Pinterest.site_url_input, 'value').then(function (site) {
                    global.site_url = site;
                })
                .waitForExist(this.selector.BO.Pinterest.redirect_url_input, 90000)
                .getAttribute(this.selector.BO.Pinterest.redirect_url_input, 'value').then(function (redirect) {
                    global.redirect_url = redirect;
                })
                .waitForExist(this.selector.BO.Pinterest.developers_link, 90000)
                .getAttribute(this.selector.BO.Pinterest.developers_link, 'href').then(function (href) {
                global.pinterest_href = href;
            })
                .click(this.selector.BO.Pinterest.developers_link)
                .pause(3000)
                .call(done);
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
                .pause(5000)
                .url(global.pinterest_href)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Pinterest.app_link, 90000)
                .click(this.external.FO.Pinterest.app_link)
                .pause(3000)
                .call(done);
        });

        it('should click on show button', function (done) {
            this.client
                .waitForExist(this.external.FO.Pinterest.app_id_input, 90000)
                .getAttribute(this.external.FO.Pinterest.app_id_input, 'value').then(function (app_id) {
                global.customer_key = app_id;
            })
                .waitForExist(this.external.FO.Pinterest.show_button, 90000)
                .click(this.external.FO.Pinterest.show_button)
                .pause(3000)
                .waitForExist(this.external.FO.Pinterest.app_secret_input, 90000)
                .getAttribute(this.external.FO.Pinterest.app_secret_input, 'value').then(function (app_secret) {
                global.customer_secret = app_secret;
            })
                .call(done);
        });

        it('should enter the site url', function (done) {
            this.client
                .moveToObject(this.external.FO.Pinterest.site_url_input, 90000)
                .waitForExist(this.external.FO.Pinterest.site_url_input, 90000)
                .setValue(this.external.FO.Pinterest.site_url_input, global.site_url)
                .call(done);
        });

        it('should enter the redirect url', function (done) {
            this.client
                .moveToObject(this.external.FO.Pinterest.delete_redirect_url_icon)
                .click(this.external.FO.Pinterest.delete_redirect_url_icon)
                .pause(3000)
                .moveToObject(this.external.FO.Pinterest.redirect_url_input, 90000)
                .click(this.external.FO.Pinterest.redirect_url_input)
                .keys(global.redirect_url)
                .keys("\uE007")
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .waitForVisible(this.external.FO.Pinterest.save_button, 90000)
                .click(this.external.FO.Pinterest.save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });
    });

    describe('Return to the configuration pinterest page', function (done) {

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Pinterest.customer_key_input, 90000)
                .setValue(this.selector.BO.Pinterest.customer_key_input, global.customer_key)
                .setValue(this.selector.BO.Pinterest.customer_secret_input, global.customer_secret)
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
