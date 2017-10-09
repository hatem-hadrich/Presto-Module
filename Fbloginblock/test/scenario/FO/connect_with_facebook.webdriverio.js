'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with facebook in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    // process.on('uncaughtException', common.take_screenshot);
    // process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
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
                    .waitForExist(this.selector.module_tech_name, 90000)
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

        it('should access to facebook configuration page', function (done) {
            this.client
                .waitForExist(this.selector.facebook_config_btn, 90000)
                .click(this.selector.facebook_config_btn)
                .call(done);
        });

        it('should enter the facebook application id', function (done) {
            this.client
                .waitForExist(this.selector.facebook_config_btn, 90000)
                .click(this.selector.facebook_config_btn)
                .call(done);
        });

        it('should enter the facebook secret key', function (done) {
            this.client
                .waitForExist(this.selector.facebook_appl_id, 90000)
                .setValue(this.selector.facebook_appl_id,"110891062925004" )
                .call(done);
        });

        it('should enter the facebook secret key', function (done) {
            this.client
                .waitForExist(this.selector.facebook_secret_key, 90000)
                .setValue(this.selector.facebook_secret_key,"b59e4e7cd262eb30c274fb00714508a4" )
                .click(this.selector.save_facebook_configuration_btn)
                .call(done);
        });

        it('should save facebook configurations', function (done) {
            this.client
                .scroll(600,0)
                .waitForExist(this.selector.save_facebook_configuration_btn)
                .click(this.selector.save_facebook_configuration_btn)
                .scroll(0,600)
                .waitForExist(this.selector.green_validation, 90000)
                .call(done);
        });

    });

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('http://' + URL)
                .call(done);

        });
    });

    describe('Check facebook connection', function() {
        it('should click on facebook button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.first_facebook_logo, 90000)
                .click(this.selector.first_facebook_logo)
                .waitForExist(this.selector.logoutFO, 90000)
                .call(done);

        });

        it('should check facebook connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .call(done);

        });
    });

    describe('Log out in Front Office', function (done) {
        it('should logout successfully in FO', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

        });
    });

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Access to the customer page', function (done) {
        it('should go to the customer page', function (done) {
            this.client
                .waitForExist(this.selector.customer_menu, 90000)
                .click(this.selector.customer_menu)
                .call(done);
        });

        it('should check new facebook customer', function (done) {
            this.client
                .waitForExist(this.selector.facebook_logo_customer_page, 90000)
                .click(this.selector.facebook_logo_customer_page)
                .call(done);
        });
    });

    describe('Access to the Front Office', function() {
        it('should check the facebook customer connection ', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('http://' + URL)
                .waitForExist(this.selector.access_loginFO, 90000)
                .click(this.selector.access_loginFO)
                .waitForExist(this.selector.loginFO, 90000)
                .setValue(this.selector.loginFO, 'nesrine.abdmouleh@gmail.com')
                .setValue(this.selector.passwordFO, '123456789')
                .click(this.selector.login_btnFO)
                .call(done);

        });
    });

    describe('Log out in Front Office', function (done) {
        it('should logout successfully in FO', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

        });
    });
});
