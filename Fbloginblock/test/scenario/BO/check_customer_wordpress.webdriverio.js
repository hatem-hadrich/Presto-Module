'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Check wordpress customer in back office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL + '/backoffice/')
                .waitForExist(this.selector.BO.AccessPage.login_input, 120000)
                .setValue(this.selector.BO.AccessPage.login_input, email)
                .waitForExist(this.selector.BO.AccessPage.password_input, 120000)
                .setValue(this.selector.BO.AccessPage.password_input, password)
                .waitForExist(this.selector.BO.AccessPage.login_button, 90000)
                .click(this.selector.BO.AccessPage.login_button)
                .waitForExist(this.selector.BO.Common.menu, 60000)
                .call(done);
        });
    });

    describe('Access to the customer page', function (done) {
        it('should go to the customer page', function (done) {
            this.client
                .waitForExist(this.selector.BO.CustomersPage.customer_subtab, 90000)
                .click(this.selector.BO.CustomersPage.customer_subtab)
                .call(done);
        });
        it('should filter the list by address email', function (done) {
            this.client
                .waitForExist(this.selector.BO.CustomersPage.customer_address_email_input, 90000)
                .setValue(this.selector.BO.CustomersPage.customer_address_email_input, 'prestotests+wordpress@gmail.com')
                .call(done);
        });
        it('should click on search button', function (done) {
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.CustomersPage.customer_search_button, 90000)
                .click(this.selector.BO.CustomersPage.customer_search_button)
                .call(done);
        });

        it('should check new wordpress customer', function (done) {
            this.client
                .waitForExist(this.selector.BO.Wordpress.logo_customer_page, 90000)
                .moveToObject(this.selector.BO.Wordpress.logo_customer_page)
                .getAttribute(this.selector.BO.Wordpress.logo_customer_page, 'title').then(function (title) {
                should(title).be.equal('Wordpress');
            })
                .getAttribute(this.selector.BO.Wordpress.logo_customer_page, 'alt').then(function (alt) {
                should(alt).be.equal('Wordpress');
            })
                .call(done);
        });
        it('logout BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });

});
