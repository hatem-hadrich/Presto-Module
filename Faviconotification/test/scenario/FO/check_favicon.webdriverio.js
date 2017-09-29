'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');


describe('Test Case n°1 : Check the favicon', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Open the Front Office', function (done) {
        it('should to the Front Office successfully', function (done) {
            this.client
                .url('http://' + URL)
                .waitForExist(this.selector.FO.AccessPage.logo_home_page, 90000)
                .call(done);
        });
    });

    describe('Add product to cart', function (done) {
        it('should get the favicon before adding product', function (done) {
            global.favicon_empty_cart = "";
            this.client
                .pause(3000)
                .getAttribute(this.selector.FO.Common.favicon, "href").then(function (img) {
                global.favicon_empty_cart = img;
            })
                .pause(3000)
                .call(done);
        });

        it('should go to the product page', function (done) {
            this.client
                .click(this.selector.FO.AccessPage.logo_home_page)
                .waitForExist(this.selector.FO.AccessPage.first_product_home_page, 90000)
                .click(this.selector.FO.AccessPage.first_product_home_page)
                .pause(2000)
                .call(done);
        });

        it('should click add to cart button', function (done) {
            this.client
                .waitForExist(this.selector.FO.ProductPage.add_to_cart_button, 90000)
                .click(this.selector.FO.ProductPage.add_to_cart_button)
                .call(done);
        });
    });

    describe('Check the favicon notification', function (done) {
        it('should find the notification', function (done) {
            global.favicon_filled_cart = "";
            this.client
                .pause(3000)
                .getAttribute(this.selector.FO.Common.favicon, "href").then(function (img) {
                global.favicon_filled_cart = img;
                should(global.favicon_filled_cart).not.be.equal(global.favicon_empty_cart);
            })
                .pause(3000)
                .call(done);
        });
    });
});