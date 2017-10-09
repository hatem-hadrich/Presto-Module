'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio');
var externals = require('../../../../common/external_globals.webdriverio');

describe('Configuration app of wordpress in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.external = externals.selector;
        this.client.call(done);
    });
    // process.on('uncaughtException', common.take_screenshot);
    // process.on('ReferenceError', common.take_screenshot);
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
        it('should access to wordpress configuration page', function (done) {
            this.client
                .waitForExist(this.selector.BO.Wordpress.config_button, 90000)
                .click(this.selector.BO.Wordpress.config_button)
                .call(done);
        });

        it('should go to wordpress developers link', function (done) {
            this.client
                .waitForExist(this.selector.BO.Wordpress.website_url_input, 90000)
                .getAttribute(this.selector.BO.Wordpress.website_url_input, 'value').then(function (url) {
                global.website_url = url;
                console.log(global.website_url)
            })
                .waitForExist(this.selector.BO.Wordpress.redirect_uri_input, 90000)
                .getAttribute(this.selector.BO.Wordpress.redirect_uri_input, 'value').then(function (url) {
                global.redirect_uri = url;
                console.log(global.redirect_uri)
            })
                .waitForExist(this.selector.BO.Wordpress.javascript_origins_input, 90000)
                .getAttribute(this.selector.BO.Wordpress.javascript_origins_input, 'value').then(function (url) {
                global.javascript_origins = url;
                console.log(global.javascript_origins)
            })
                .waitForExist(this.selector.BO.Wordpress.developers_link, 90000)
                .click(this.selector.BO.Wordpress.developers_link)
                .pause(3000)
                .call(done);
        });

        it('should access to wordpress account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.external.FO.Wordpress.username_input, 90000)
                .setValue(this.external.FO.Wordpress.username_input, 'prestotests+wordpress@gmail.com')
                .setValue(this.external.FO.Wordpress.password_input, 'presto_tests')
                .waitForExist(this.external.FO.Wordpress.login_button, 90000)
                .click(this.external.FO.Wordpress.login_button)
                .pause(5000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.app_link, 90000)
                .click(this.external.FO.Wordpress.app_link)
                .pause(5000)
                .call(done);
        });

        it('should access to the manage settings', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.customer_key_td, 90000)
                .getText(this.external.FO.Wordpress.customer_key_td).then(function (key) {
                global.wordpress_customer_key = key;
                console.log(global.wordpress_customer_key)
            })
                .waitForExist(this.external.FO.Wordpress.customer_secret_td, 90000)
                .getText(this.external.FO.Wordpress.customer_secret_td).then(function (secret) {
                global.wordpress_customer_secret = secret.substring(0, secret.lastIndexOf("Reset Key"));
                console.log(global.wordpress_customer_secret)
            })
                .waitForExist(this.external.FO.Wordpress.manage_settings_subtab, 90000)
                .click(this.external.FO.Wordpress.manage_settings_subtab)
                .pause(5000)
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.website_url_input, 90000)
                .setValue(this.external.FO.Wordpress.website_url_input, global.website_url)
                .pause(5000)
                .call(done);
        });

        it('should enter the redirect uri', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.redirect_uri_input, 90000)
                .setValue(this.external.FO.Wordpress.redirect_uri_input, global.redirect_uri)
                .pause(5000)
                .call(done);
        });

        it('should enter the terms of service url', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.javascript_origins_input, 90000)
                .setValue(this.external.FO.Wordpress.javascript_origins_input, global.javascript_origins)
                .pause(5000)
                .call(done);
        });

        it('should click on save changes button', function (done) {
            this.client
                .waitForExist(this.external.FO.Wordpress.update_button, 90000)
                .click(this.external.FO.Wordpress.update_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.BO.Wordpress.customer_key_input, 90000)
                .setValue(this.selector.BO.Wordpress.customer_key_input, global.wordpress_customer_key)
                .setValue(this.selector.BO.Wordpress.customer_secret_input, global.wordpress_customer_secret)
                .pause(5000)
                .call(done);
        });

        it('should save wordpress configurations', function (done) {
            this.client
                .waitForExist(this.selector.BO.Wordpress.save_button, 90000)
                .click(this.selector.BO.Wordpress.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
