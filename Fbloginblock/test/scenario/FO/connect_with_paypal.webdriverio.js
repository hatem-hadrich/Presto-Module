'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with paypal in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    // process.on('uncaughtException', common.take_screenshot);
    // process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);

        });
    });

    describe('Check paypal connection', function() {
        it('should click on paypal button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Paypal.first_paypal_logo, 90000)
                .click(this.selector.FO.Paypal.first_paypal_logo)
                .call(done);

        });
    });

    describe('Connection on paypal site', function() {


        it('should acces to paypal site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with paypal account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Paypal.username_input, 90000)
                .setValue(this.selector.FO.Paypal.username_input, 'prestotests+paypal@gmail.com')
                .setValue(this.selector.FO.Paypal.password_input, 'presto_tests')
                .waitForExist(this.selector.FO.Paypal.login_button, 90000)
                .click(this.selector.FO.Paypal.login_button)
                .call(done);
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
                .waitForVisible(this.selector.FO.Paypal.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Paypal.user_connected_span)
                .getText(this.selector.FO.Paypal.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
            })
                .call(done);

        });
    });
});
