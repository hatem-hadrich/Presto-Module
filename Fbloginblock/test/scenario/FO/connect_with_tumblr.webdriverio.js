'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with tumblr in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);

        });
    });

    describe('Check tumblr connection', function() {
        it('should click on tumblr button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Tumblr.first_tumblr_logo, 90000)
                .click(this.selector.FO.Tumblr.first_tumblr_logo)
                .call(done);

        });
    });

    describe('Connection on tumblr site', function() {


        it('should acces to tumblr site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should enter the email of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.FO.Tumblr.username_input, 90000)
                .setValue(this.selector.FO.Tumblr.username_input, 'prestotests+tumblr@gmail.com')
                .waitForExist(this.selector.FO.Tumblr.next_button, 90000)
                .click(this.selector.FO.Tumblr.next_button)
                .call(done);
        });

        it('should enter the password of tumblr account', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.FO.Tumblr.password_input, 90000)
                .setValue(this.selector.FO.Tumblr.password_input, 'presto_tests')
                .waitForExist(this.selector.FO.Tumblr.next_button, 90000)
                .click(this.selector.FO.Tumblr.next_button)
                .pause(2000)
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
                .waitForVisible(this.selector.FO.Tumblr.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Tumblr.user_connected_span)
                .getText(this.selector.FO.Tumblr.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);

        });
    });
});
