'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('Verify the Configuration of the Module', function () {
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

    describe('Verify PrestaShop Security ', function (done) {

        it('should go to the orders page', function (done) {
                this.client
                    .click(this.selector.orders)
                    .waitForExist(this.selector.orders_form, 5000)
                    .call(done);
        });

        it('should go to first order', function(done){
			    this.client
                    .click(this.selector.First_order)
                    //.waitForExist('//*[@id="status"]/form/div/div[2]/button', 90000)
                    .call(done);
        });

        it('should verify the notification Prestafraud ', function(done){
            this.client
                .waitForExist(this.selector.legand_prestashop,5000)
                .getText(this.selector.legand_prestashop).then(function(text) {
                    if(text != "PrestaShop Security" ){
                         done(new Error(""));
                    }
                })
                .call(done)
        });

 });


});