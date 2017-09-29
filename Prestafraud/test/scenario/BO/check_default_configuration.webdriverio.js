'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');


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
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });

    describe('Check PrestaShop Security configuration', function (done) {

        it('should go to modules page', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulesPage.modules_subtab, 90000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr === 0) {
                done(new Error('The module you are searching for does not exist!'));
            }else {
                this.client
                    .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name_prestafraud)
                    .click(this.selector.BO.ModulesPage.search_button)
                    .waitForExist(this.selector.BO.ModulePagePrestaFraud.config_module_button, 90000)
                    .click(this.selector.BO.ModulePagePrestaFraud.config_module_button)
                    .call(done);
            }
        });

        it('Should configure the module', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.create_account_button, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.create_account_button)
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.agree_terms_option, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.agree_terms_option)
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.shop_email_input, 90000)
                .setValue(this.selector.BO.ModulePagePrestaFraud.shop_email_input,'demo@prestashop.com')
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.valid_compte_button, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.valid_compte_button)
                .call(done)
        });

        it('Should configure the shop', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.shop_id_input, 90000)
                .getAttribute(this.selector.BO.ModulePagePrestaFraud.shop_id_input, "value").then(function(text) {
                    if(text[1] === "" ){
                         done(new Error("Shop ID is empty"));
                    }
                })
                .getAttribute(this.selector.BO.ModulePagePrestaFraud.shop_key_input, "value").then(function(text) {
                    if(text[1] === "" ){
                         done(new Error("Shop KEY is empty"));
                    }
                })
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.shop_activity_select, 9)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.livraison_type_select, 4)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.module_payment_select, 2)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.transfer_bancaire_type_select, 4)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.paypal_type_select, 4)
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.prestashop_security_save_input,3000)
                .click(this.selector.BO.ModulePagePrestaFraud.prestashop_security_save_input)
                .call(done)
        });

        it('should go to the orders page', function (done) {
                this.client
                    .click(this.selector.BO.ModulePagePrestaFraud.orders)
                    .waitForExist(this.selector.BO.ModulePagePrestaFraud.orders_form, 5000)
                    .call(done);
        });

        it('should go to first order', function(done){
			    this.client
                    .click(this.selector.BO.ModulePagePrestaFraud.first_order)
                    .call(done);
        });

        it('should verify the notification Prestafraud ', function(done){
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.prestafraud_legand,5000)
                .getText(this.selector.BO.ModulePagePrestaFraud.prestafraud_legand).then(function(text) {
                    if(text !== "PrestaShop Security" ){
                         done(new Error("Notification Prestafraud dosen't exist "));
                    }
                })
                .call(done)
        });


 });


});