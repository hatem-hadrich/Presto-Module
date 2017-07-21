'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('Test case n°1 = Enable payment with a Paypal account (sandbox)', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('Check module configuration', function (done) {
        it('should go to boutique parameter page', function (done) {
            this.client
                .waitForExist(this.selector.boutique_parametre, 90000)
                .click(this.selector.boutique_parametre)
                .pause(2000)
                .selectByIndex(this.selector.arrondi_rules,0)
                .selectByIndex(this.selector.arrondi_type,0)
                .pause(2000)
                .waitForExist(this.selector.save_boutique_parametre, 90000)
                .click(this.selector.save_boutique_parametre)
                .pause(2000)
                .call(done);
        });

        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .setValue(this.selector.modules_search, "paypal")
                .click(this.selector.search_btn)
                .waitForExist(this.selector.option_module_btn)
                .click(this.selector.option_module_btn)
                .pause(1000)
                .waitForExist(this.selector.config_btn)
                .click(this.selector.config_btn)
                .pause(2000)
                .call(done);
        });

        it('Activation Of Sandbox', function (done) {
            this.client
                .waitForExist(this.selector.setting_btn, 90000)
                .click(this.selector.setting_btn)
                .pause(2000)
                .waitForExist(this.selector.activate_sandbox, 90000)
                .click(this.selector.activate_sandbox)
                .pause(2000)
                .waitForExist(this.selector.save_config_paypal, 90000)
                .click(this.selector.save_config_paypal)
                .call(done)
        });

        it('Open paypal config modal', function (done) {
            this.client
                .waitForExist(this.selector.setting_paypal, 90000)
                .click(this.selector.setting_paypal)
                .call(done)
        });

        it('set paypal access configuration', function (done) {
            this.client
                .waitForExist(this.selector.client_id_setting, 90000)
                .setValue(this.selector.client_id_setting, 'AcGJYME6IiLV2c0IYB-HkPyDcEh6bRVTQpcY-zf_AOO4aX4UVThF5D_KHqJH-1q3WnH9FqaPNqsw1wnL')
                .waitForExist(this.selector.client_secret_setting, 90000)
                .setValue(this.selector.client_secret_setting, 'EC26Nev3M2XmPxnrHF-D7E3m5KtEskJBo1RFmMG_TpaJNP-TfjDYlNzXNT9SanFJeD8STUVsOaRRDyAH')
                .waitForExist(this.selector.valid_setting_paypal, 90000)
                .click(this.selector.valid_setting_paypal)
                .pause(3000)
                .getText(this.selector.confirme_msg).then(function(data) {
                    var Resul= data.indexOf('Votre compte PayPal est actuellement configuré pour accepter les paiements dans un environnement de test (Sandbox)');
                    if(Resul == -1){
                        done(new Error("Configuration problem"));
                    }
                 })
                .call(done)
        });
    });



});