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

		it('Open the shop and loggin FO', function(done){
			this.client
                .url('http://' + URL)
                .waitForExist(this.selector.access_loginFO, 90000)
                .click(this.selector.access_loginFO)
                .waitForExist(this.selector.loginFO, 90000)
                .setValue(this.selector.loginFO, 'pub@prestashop.com')
                .setValue(this.selector.passwordFO, '123456789')
                .click(this.selector.login_btnFO)
                .pause(3000)
                .call(done);

		});

	describe('Add product to cart', function(done){
        it('should go to the product details', function(done){
			this.client
			    .waitForExist(this.selector.desktop_login, 90000)
				.click(this.selector.desktop_login)
				.waitForExist(this.selector.product_choice, 90000)
				.click(this.selector.product_choice)
				.waitForExist(this.selector.product_image, 90000)
				.pause(2000)
				.click(this.selector.validate_cart_choice)
                .pause(3000)
                .click(this.selector.modal_valid_btn)
			    .call(done);
		});


	});

	describe('Validate the cart', function(){

        it('should go to Checkout Btn', function(done){
			this.client
                .waitForExist(this.selector.command_button_checkout, 90000)
                .click(this.selector.command_button_checkout)
                .call(done);

		});

        it('should select the address step-2', function(done){
			this.client
				.waitForExist(this.selector.checkout_step2_continue_button, 90000)
				.click(this.selector.checkout_step2_continue_button)
				.waitForExist(this.selector.checkout_step3_continue_button, 90000)
				.click(this.selector.checkout_step3_continue_button)
				.call(done);
		});

		it('should select the payment step-3', function(done){
			this.client
				.waitForExist(this.selector.checkout_step4_payment, 90000)
				.click(this.selector.checkout_step4_payment)
			    .call(done);
		});

		it('should select the shipping method step-4', function(done){
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
			this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

		});
	});

});