'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');


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
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });

    describe('Verify PrestaShop Security ', function (done) {

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
                        if(text != "PrestaShop Security" ){
                            done(new Error("Notification Prestafraud dosen't exist "));
                        }
                    })
                    .call(done)
            });

     });


});