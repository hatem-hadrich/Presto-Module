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

        it('should connecting with tumblr account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Tumblr.username_input) === true){
                this.client
                    .waitForVisible(this.selector.FO.Tumblr.username_input, 90000)
                    .setValue(this.selector.FO.Tumblr.username_input, 'prestotests+tumblr@gmail.com')
                    .waitForExist(this.selector.FO.Tumblr.next_button, 90000)
                    .click(this.selector.FO.Tumblr.next_button)
                    .pause(2000)
                    .waitForVisible(this.selector.FO.Tumblr.password_input, 90000)
                    .setValue(this.selector.FO.Tumblr.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Tumblr.next_button, 90000)
                    .click(this.selector.FO.Tumblr.next_button)
                    .pause(2000)
                    .call(done);
            }else{
                this.client
                    .waitForExist(this.selector.FO.Tumblr.allow_button, 90000)
                    .click(this.selector.FO.Tumblr.allow_button)
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
        it('should linked account of twitter', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Tumblr.linked_modale, 90000)
                .setValue(this.selector.FO.Tumblr.email_input, 'prestotests+tumblr@gmail.com')
                .waitForExist(this.selector.FO.Tumblr.send_button, 90000)
                .click(this.selector.FO.Tumblr.send_button)
                .pause(3000)
                .getText(this.selector.FO.Tumblr.check_sent_email_p).then(function (value) {
                should(value).be.equal("Password has been sent to your mailbox: prestotests+tumblr@gmail.com")
            })
                .url('https://' + URL)
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
