'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with yahoo in front office', function() {
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

    describe('Check yahoo connection', function() {
        it('should click on yahoo button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.first_yahoo_logo, 90000)
                .click(this.selector.FO.Yahoo.first_yahoo_logo, 90000)
                .call(done);

        });
    });

    describe('Connection on yahoo site', function() {

        it('should acces to yahoo site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should enter the email of yahoo account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.username_input, 90000)
                .setValue(this.selector.FO.Yahoo.username_input, 'prestotests@yahoo.com')
                .waitForExist(this.selector.FO.Yahoo.next_button, 90000)
                .click(this.selector.FO.Yahoo.next_button)
                .call(done);
        });

        it('should enter the password of yahoo account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.password_input, 90000)
                .setValue(this.selector.FO.Yahoo.password_input, 'prestashop123')
                .waitForExist(this.selector.FO.Yahoo.next_button, 90000)
                .click(this.selector.FO.Yahoo.next_button)
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
                .waitForVisible(this.selector.FO.Yahoo.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Yahoo.user_connected_span)
                .getText(this.selector.FO.Yahoo.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);
        });
    });
});
