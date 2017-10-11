'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with linkedin in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);

        });
    });

    describe('Check linkedin connection', function() {
        it('should click on linkedin button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Linkedin.first_linkedin_logo, 90000)
                .click(this.selector.FO.Linkedin.first_linkedin_logo)
                .call(done);
        });
    });

    describe('Connection on linkedin site', function() {


        it('should acces to linkedin site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .pause(2000)
                .call(done);
        });

        it('should connecting with linkedin account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Linkedin.username_input) === true){
                this.client
                    .waitForExist(this.selector.FO.Linkedin.username_input, 90000)
                    .setValue(this.selector.FO.Linkedin.username_input, 'prestotestslinkedin@gmail.com')
                    .setValue(this.selector.FO.Linkedin.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Linkedin.allow_button, 90000)
                    .click(this.selector.FO.Linkedin.allow_button)
                    .pause(5000)
                    .call(done);
            }else{
                this.client
                    .waitForExist(this.selector.FO.Linkedin.allow_button, 90000)
                    .click(this.selector.FO.Linkedin.allow_button)
                    .pause(2000)
                    .call(done);
            }
        });

    });

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                this.close(handles.value[handles.value.length - 1]);
                return this.switchTab(handles.value[0]);
            })
                .call(done);

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Linkedin.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Linkedin.user_connected_span)
                .getText(this.selector.FO.Linkedin.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
            })
                .call(done);

        });
        describe('Log out in Front Office', function (done) {
            it('should logout successfully in FO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.AccessPage.logoutFO, 90000)
                    .click(this.selector.FO.AccessPage.logoutFO)
                    .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
                    .call(done);

            });
        });
    });

    describe('The Purchase of a product', function () {

        describe('Add product to cart', function (done) {
            it('should go to the product details', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.FO.AccessPage.logo_home_page)
                    .waitForExist(this.selector.FO.AccessPage.first_product_home_page, 90000)
                    .getText(this.selector.FO.AccessPage.first_product_home_page_name).then(function (text) {
                    global.my_name = text[1].split('...')[0];
                })
                    .click(this.selector.FO.AccessPage.first_product_home_page)
                    .waitForExist(this.selector.FO.ProductPage.product_image, 90000)
                    .getText(this.selector.FO.ProductPage.product_name_details).then(function (text) {
                    var my_name_check = text;
                    my_name_check.pop(-1).toLowerCase().should.containEql(my_name.toLowerCase());
                })
                    .getText(this.selector.FO.ProductPage.product_price_details).then(function (text) {
                    global.my_price = text;
                })
                    .getValue(this.selector.FO.ProductPage.product_quantity_details).then(function (text) {
                    global.my_quantity = text;
                })
                    .click(this.selector.FO.ProductPage.add_to_cart_button)
                    .waitForExist(this.selector.FO.ProductPage.layer_cart, 90000)
                    .getText(this.selector.FO.ProductPage.layer_cart_name_details).then(function (text) {
                    var my_cart_name_check = text;
                    my_cart_name_check.toLowerCase().should.containEql(my_name.toLowerCase())
                })
                    .getText(this.selector.FO.ProductPage.layer_cart_price_details).then(function (text) {
                    var my_cart_price_check = text;
                    should(my_cart_price_check).be.equal(my_price);
                })
                    .getText(this.selector.FO.ProductPage.layer_cart_quantity_details).then(function (text) {
                    var my_cart_quantity_check = text.split(': ');
                    should(my_cart_quantity_check[1]).be.equal(my_quantity);
                })
                    .call(done);
            });

            it('should click add to cart button ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.FO.ProductPage.layer_cart_command_button)
                    .call(done);
            });
        });

        describe('Validate the cart', function () {
            it('should validate name of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.ProductPage.command_checkout_button, 90000)
                    .moveToObject(this.selector.FO.ProductPage.command_product_name)
                    .getText(this.selector.FO.ProductPage.command_product_name).then(function (text) {
                    var command_my_name = text;
                    command_my_name.toLowerCase().should.containEql(my_name.toLowerCase());
                })
                    .call(done);
            });

            it('should validate price of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .getText(this.selector.FO.ProductPage.command_product_price).then(function (text) {
                    var command_price_check = text;
                    should(command_price_check).be.equal(my_price);
                })
                    .call(done);
            });
            it('should click checkout button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.FO.ProductPage.command_checkout_button)
                    .call(done);
            });
            it('should click connect button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.FO.Commande.connect_tab)
                    .call(done);
            });
            it('should click on linkedin button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .moveToObject(this.selector.FO.Commande.first_linkedin_logo)
                    .click(this.selector.FO.Commande.first_linkedin_logo)
                    .pause(3000)
                    .windowHandles().then(function (handles) {
                    return this.switchTab(handles.value[handles.value.length - 1]);
                })
                    .call(done);
            });
            it('should connecting with linkedin account', function (done) {
                global.fctname = this.test.title;
                if(this.client.isExisting(this.selector.FO.Linkedin.username_input) === true){
                    this.client
                        .waitForExist(this.selector.FO.Linkedin.username_input, 90000)
                        .setValue(this.selector.FO.Linkedin.username_input, 'prestotestslinkedin@gmail.com')
                        .setValue(this.selector.FO.Linkedin.password_input, 'presto_tests')
                        .waitForExist(this.selector.FO.Linkedin.allow_button, 90000)
                        .click(this.selector.FO.Linkedin.allow_button)
                        .pause(5000)
                        .call(done);
                }else{
                    this.client
                        .waitForExist(this.selector.FO.Linkedin.allow_button, 90000)
                        .click(this.selector.FO.Linkedin.allow_button)
                        .pause(2000)
                        .call(done);
                }
            });

            it('should select the address step-2', function (done) {
                global.fctname = this.test.title;
                this.client
                    .windowHandles().then(function (handles) {
                    return this.switchTab(handles.value[0]);
                })
                    .pause(3000)
                    .waitForExist(this.selector.FO.Commande.address_input, 90000)
                    .setValue(this.selector.FO.Commande.address_input, 'rue boulvard')
                    .waitForExist(this.selector.FO.Commande.post_code_input, 90000)
                    .setValue(this.selector.FO.Commande.post_code_input, '75005')
                    .waitForExist(this.selector.FO.Commande.city_input, 90000)
                    .setValue(this.selector.FO.Commande.city_input, 'Paris')
                    .moveToObject(this.selector.FO.CartSummary.step3_section, 90000)
                    .waitForExist(this.selector.FO.Commande.checkout_step2_continue_button, 90000)
                    .click(this.selector.FO.Commande.checkout_step2_continue_button)
                    .call(done);
            });

            it('should select the delvery step-3', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.Commande.checkout_step3_continue_button, 90000)
                    .click(this.selector.FO.Commande.checkout_step3_continue_button)
                    .call(done);
            });

            it('should select the shipping method step-4', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.Commande.payment_option_radio, 90000)
                    .click(this.selector.FO.Commande.payment_option_radio)
                    .waitForExist(this.selector.FO.ProductPage.checkout_step4_cgv, 90000)
                    .click(this.selector.FO.ProductPage.checkout_step4_cgv)
                    .moveToObject(this.selector.FO.Commande.footer, 90000)
                    .waitForExist(this.selector.FO.ProductPage.checkout_step4_order, 90000)
                    .click(this.selector.FO.ProductPage.checkout_step4_order)
                    .call(done);
            });

            it('should confirm the order', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.ProductPage.order_confirmation_name, 90000)
                    .getText(this.selector.FO.ProductPage.order_confirmation_name).then(function (text) {
                    var command_confirmation_my_name = text;
                    command_confirmation_my_name.toLowerCase().should.containEql(my_name.toLowerCase());
                })
                    .waitForExist(this.selector.FO.ProductPage.order_confirmation_price1, 90000)
                    .getText(this.selector.FO.ProductPage.order_confirmation_price1).then(function (text) {
                    var order_confirmation_price1 = text;
                    should(order_confirmation_price1).be.equal(my_price);
                })
                    .moveToObject(this.selector.FO.ProductPage.customer_support_link, 90000)
                    .waitForExist(this.selector.FO.ProductPage.order_confirmation_price2, 90000)
                    .getText(this.selector.FO.ProductPage.order_confirmation_price2).then(function (text) {
                    var order_confirmation_price2 = text;
                    should(order_confirmation_price2).be.equal(my_price);
                })
                    .waitForExist(this.selector.FO.ProductPage.order_confirmation_ref, 90000)
                    .getText(this.selector.FO.ProductPage.order_confirmation_ref).then(function (text) {
                    var my_ref = text.split(': ')
                    global.order_reference = my_ref[1];
                })
                    .call(done);
            });

            it('should get the order id', function (done) {
                global.fctname = this.test.title;
                this.client
                    .url().then(function (res) {
                    var current_url = res.value;
                    var temp1 = current_url.split("id_order=");
                    var temp2 = temp1[1].split("&");
                    global.order_id = temp2[0];
                })
                    .call(done);
            });
        });

        describe('Log out in Front Office', function (done) {
            it('should logout successfully in FO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.FO.AccessPage.logoutFO, 90000)
                    .click(this.selector.FO.AccessPage.logoutFO)
                    .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
                    .call(done);
            });
        });
    });
});
