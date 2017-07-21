'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('Test case n°1 = Check the default configuration', function () {
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

    describe('check PrestaShop Security configuration', function (done) {
        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            this.client
                .setValue(this.selector.modules_search, "prestafraud")
                .click(this.selector.modules_search_button)
                .pause(2000)
                .waitForExist(this.selector.btn_config, 90000)
                .click(this.selector.btn_config)
                .call(done);
        });

        it('Should configure the module', function (done) {
            this.client
                .waitForExist(this.selector.create_account_btn, 90000)
                .click(this.selector.create_account_btn)
                .waitForExist(this.selector.agree_terms, 90000)
                .click(this.selector.agree_terms)
                .waitForExist(this.selector.shop_email, 90000)
                .setValue(this.selector.shop_email,'demo@prestashop.com')
                .waitForExist(this.selector.valid_compte_btn, 90000)
                .click(this.selector.valid_compte_btn)
                .call(done)
        });

        it('Should configure the shop', function (done) {
            this.client
                .waitForExist(this.selector.shop_id, 90000)
                .getAttribute(this.selector.shop_id, "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop ID is empty"));
                    }
                })
                .getAttribute(this.selector.shop_key, "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop KEY is empty"));
                    }
                })
                .selectByIndex(this.selector.shop_activity, 9)
                .selectByIndex(this.selector.livraison_type, 4)
                .selectByIndex(this.selector.carrier_type, 3)
                .selectByIndex(this.selector.module_paymenet, 2)
                .selectByIndex(this.selector.transfer_bancaire_type, 4)
                .selectByIndex(this.selector.paypal_type, 4)
                .pause(3000)
                .click(this.selector.prestashop_security_save)
                .call(done)
        });

        it('should go to the orders page', function (done) {
                this.client
                    .click(this.selector.orders)
                    .waitForExist(this.selector.orders_form, 5000)
                    .call(done);
        });

        it('should go to first order', function(done){
			    this.client
                    .click(this.selector.First_order)
                    //.waitForExist('//!*[@id="status"]/form/div/div[2]/button', 90000)
                    .call(done);
        });

        it('should verify the notification Prestafraud ', function(done){
            this.client
                .waitForExist(this.selector.Prestafraud_legand,5000)
                .getText(this.selector.Prestafraud_legand).then(function(text) {
                    if(text != "PrestaShop Security" ){
                         done(new Error("Notification Prestafraud dosen't exist "));
                    }
                })
                .call(done)
        });


 });


});