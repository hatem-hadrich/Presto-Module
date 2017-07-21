'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('The Purchase of a product', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    it('Open the shop ', function(done){
        global.fctname= this.test.title;
        this.client
            .url('http://' + URL)
            .waitForExist(this.selector.access_loginFO, 90000)
            .click(this.selector.access_loginFO)
            .waitForExist(this.selector.loginFO, 90000)

            .call(done);
    });



   describe('Buying product', function(done){
        it('should go to the First product details', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.home_logo_url, 9000)
                .click(this.selector.home_logo_url)
                .waitForExist(this.selector.all_product, 9000)
                .moveToObject(this.selector.all_product)
                .click(this.selector.all_product)
                .waitForExist(this.selector.First_product, 90000)
                .click(this.selector.First_product)
                .waitForExist(this.selector.add_to_cart_lifestyle, 90000)
                .click(this.selector.add_to_cart_lifestyle)
                .pause(3000)
                .waitForExist(this.selector.valid_cart_lifestyle, 90000)
                .click(this.selector.valid_cart_lifestyle)
                .call(done);
        });
    });

  describe('Validate the cart', function(){
        it('should go to Checkout Btn', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.command_button_checkout, 90000)
                .click(this.selector.command_button_checkout)

                .waitForExist('//*[@id="checkout-personal-information-step"]/div/ul/li[3]/a', 90000)
                .click('//*[@id="checkout-personal-information-step"]/div/ul/li[3]/a')

                .setValue('//*[@id="login-form"]/section/div[1]/div/input', 'pub@prestashop.com')
                .setValue('//*[@id="login-form"]/section/div[2]/div/div[2]/input', '123456789')


                .waitForExist(this.selector.login_btnFO, 90000)
                .click(this.selector.login_btnFO)

                .call(done);
        });

        it('should select the address step-2', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.checkout_step2_continue_button, 90000)
                .click(this.selector.checkout_step2_continue_button)
                .waitForExist(this.selector.checkout_step3_continue_button, 90000)
                .click(this.selector.checkout_step3_continue_button)
                .call(done);
        });

        it('should select the payment step-3', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.checkout_step4_payment, 90000)
                .click(this.selector.checkout_step4_payment)
                .call(done);
        });

        it('should select the shipping method step-4', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.checkout_step4_cgv, 90000)
                .click(this.selector.checkout_step4_cgv)
                .waitForExist(this.selector.checkout_step4_order, 90000)
                .click(this.selector.checkout_step4_order)
                .call(done);
        });
    });

    describe('Log out in Front Office', function(done){
        it('should logout successfully in FO', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

        });
    });

});