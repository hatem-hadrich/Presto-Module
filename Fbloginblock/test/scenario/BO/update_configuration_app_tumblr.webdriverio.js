'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio');

describe('Configuration app of tumblr in back office', function() {
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

    describe('Access to the module configuration page', function (done) {
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

        it('should access to tumblr configuration page', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.tumblr_config_btn, 90000)
                .click(this.selector.tumblr.tumblr_config_btn)
                .call(done);
        });

        it('should go to tumblr developers link', function (done) {

            this.client
                .waitForExist(this.selector.tumblr.website_url_input, 90000)
                .getAttribute(this.selector.tumblr.website_url_input, 'value').then(function (website) {
                    global.website_url = website;
                    console.log(global.website_url);
                })
                .waitForExist(this.selector.tumblr.callback_url_input, 90000)
                .getAttribute(this.selector.tumblr.callback_url_input, 'value').then(function (callback) {
                    global.callback_url = callback;
                    console.log(global.callback_url);
                })
                .waitForExist(this.selector.tumblr.tumblr_developers_link, 90000)
                .click(this.selector.tumblr.tumblr_developers_link)
                .call(done);
        });

        it('should enter the email of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForVisible(this.selector.tumblr.username_input, 90000)
                .setValue(this.selector.tumblr.username_input, 'prestotests+tumblr@gmail.com')
                .waitForExist(this.selector.tumblr.next_button, 90000)
                .click(this.selector.tumblr.next_button)
                .call(done);
        });

        it('should enter the password of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.tumblr.password_input, 90000)
                .setValue(this.selector.tumblr.password_input, 'presto_tests')
                .waitForExist(this.selector.tumblr.signin_button, 90000)
                .click(this.selector.tumblr.signin_button)
                .pause(2000)
                .call(done);
        });

        it('should access to the app PrestoAppSocialConnect', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.app_link, 90000)
                .click(this.selector.tumblr.app_link)
                .call(done);
        });

        it('should click on show secret button', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                return this.switchTab(handles[handles.length - 1])
            })
                .waitForExist(this.selector.tumblr.tumblr_customer_id, 90000)
                .getText(this.selector.tumblr.tumblr_customer_id).then(function(key){
                global.api_key = key;
                console.log(global.api_key);
            })
                .waitForExist(this.selector.tumblr.tumblr_show_secret_button, 90000)
                .click(this.selector.tumblr.tumblr_show_secret_button)
                .waitForExist(this.selector.tumblr.tumblr_customer_secret, 90000)
                .getText(this.selector.tumblr.tumblr_customer_secret).then(function(secret){
                global.api_secret = secret;
                console.log(global.api_secret);
            })
                .call(done);
        });

        it('should enter the website url', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.tumblr_website_url_input, 90000)
                .setValue(this.selector.tumblr.tumblr_website_url_input, global.website_url)
                .call(done);
        });

        it('should enter the callback url', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.tumblr_callback_url_input, 90000)
                .setValue(this.selector.tumblr.tumblr_callback_url_input, global.callback_url)
                .call(done);
        });

        it('should click on save button', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.tumblr_save_button, 90000)
                .click(this.selector.tumblr.tumblr_save_button)
                .pause(5000)
                .getTabIds().then(function(handles){
                this.close(handles[handles.length - 1]);
                return this.switchTab(handles[0])
            })
                .call(done);
        });

        it('should enter the customer key and secret', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.customer_key_input, 90000)
                .setValue(this.selector.tumblr.customer_key_input, global.api_key)
                .setValue(this.selector.tumblr.customer_secret_input, global.api_secret)
                .call(done);
        });

        it('should save tumblr configurations', function (done) {
            this.client
                .waitForExist(this.selector.tumblr.save_button, 90000)
                .click(this.selector.tumblr.save_button)
                .call(done);
        });

        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
