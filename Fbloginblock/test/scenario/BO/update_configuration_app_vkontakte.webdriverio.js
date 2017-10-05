'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of vkontakte in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
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
                .waitForExist(this.selector.login, 120000)
                .setValue(this.selector.login, 'remi.gaillard@prestashop.com')
                .waitForExist(this.selector.password, 120000)
                .setValue(this.selector.password, 'abcd1234')
                .waitForExist(this.selector.login_btn, 90000)
                .click(this.selector.login_btn)
                .waitForExist(this.selector.menu, 60000)
                .call(done);
        });
    });

    describe('Access to the module page', function (done) {
        it('should go to modules installed page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .setValue(this.selector.modules_search, module_tech_name_socialConnect)
                    .click(this.selector.modules_search_button)
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
                    .waitForExist(this.selector.module_tech_name, 90000)
                    .waitForExist(this.selector.module_conf_btn,90000)
                    .click(this.selector.module_conf_btn)
                    .call(done);
            }
        });
        it('should access to vkontakte configuration page', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.vkontakte_config_btn, 90000)
                .click(this.selector.vkontakte.vkontakte_config_btn)
                .call(done);
        });

        it('should go to vkontakte developers link', function (done) {

            this.client
                .waitForExist(this.selector.vkontakte.site_address_input, 90000)
                .getAttribute(this.selector.vkontakte.site_address_input, 'value').then(function (url) {
                global.site_address = url;
                global.base_domain = url.split('https://').pop().split('/').shift();
                console.log(global.site_address);
                console.log(global.base_domain);
            })
                .waitForExist(this.selector.vkontakte.vkontakte_developers_link, 90000)
                .click(this.selector.vkontakte.vkontakte_developers_link)
                .call(done);
        });

        it('should access to the vkontakte account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.vkontakte.vkontakte_username_input, 90000)
                .setValue(this.selector.vkontakte.vkontakte_username_input, 'prestotestsvkontakte@gmail.com')
                .setValue(this.selector.vkontakte.vkontakte_password_input, 'presto_tests')
                .waitForExist(this.selector.vkontakte.vkontakte_signin_button, 90000)
                .click(this.selector.vkontakte.vkontakte_signin_button)
                .call(done);
        });

        it('should access to the list of apps', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.my_apps_menu, 90000)
                .click(this.selector.vkontakte.my_apps_menu)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.manage_button, 90000)
                .click(this.selector.vkontakte.manage_button)
                .call(done);
        });

        it('should click on settings menu', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.settings_subtab, 90000)
                .click(this.selector.vkontakte.settings_subtab)
                .pause(3000)
                .waitForExist(this.selector.vkontakte.id_text, 90000)
                .getText(this.selector.vkontakte.id_text).then(function (key) {
                global.vkontakte_customer_key = key;
                console.log(global.vkontakte_customer_key);
            })
                .getAttribute(this.selector.vkontakte.secret_key_input, 'value').then(function (secret) {
                global.vkontakte_customer_secret = secret;
                console.log(global.vkontakte_customer_secret);
            })
                .call(done);
        });

        it('should enter the site address', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.site_url_input, 90000)
                .setValue(this.selector.vkontakte.site_url_input, global.site_address)
                .call(done);
        });

        it('should enter the base domain', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.delete_base_domain_icon, 90000)
                .click(this.selector.vkontakte.delete_base_domain_icon)
                .pause(3000)
                .waitForExist(this.selector.vkontakte.domain_input, 90000)
                .setValue(this.selector.vkontakte.domain_input, global.base_domain)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .moveToObject(this.selector.vkontakte.vkontakte_save_button)
                .click(this.selector.vkontakte.vkontakte_save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer id and secret', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.customer_key_input, 90000)
                .setValue(this.selector.vkontakte.customer_key_input, global.vkontakte_customer_key)
                .setValue(this.selector.vkontakte.customer_secret_input, global.vkontakte_customer_secret)
                .call(done);
        });

        it('should save vkontakte configurations', function (done) {
            this.client
                .waitForExist(this.selector.vkontakte.save_button, 90000)
                .click(this.selector.vkontakte.save_button)
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
