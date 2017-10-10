'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with pinterest in front office', function() {
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

    describe('Check pinterest connection', function() {
        it('should click on pinterest button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Pinterest.first_pinterest_logo, 90000)
                .click(this.selector.FO.Pinterest.first_pinterest_logo)
                .call(done);

        });
    });

    describe('Connection on pinterest site', function() {


        it('should acces to pinterest site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with pinterest account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Pinterest.username_input) === true){
                this.client
                    .waitForExist(this.selector.FO.Pinterest.username_input, 90000)
                    .setValue(this.selector.FO.Pinterest.username_input, 'prestotests+pinterest@gmail.com')
                    .setValue(this.selector.FO.Pinterest.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Pinterest.login_button, 90000)
                    .click(this.selector.FO.Pinterest.login_button)
                    .pause(5000)
                    .call(done);
            }else{
                this.client
                    .waitForExist(this.selector.FO.Pinterest.allow_button, 90000)
                    .click(this.selector.FO.Pinterest.allow_button)
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
        it('should linked account of pinterest', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Pinterest.email_input, 90000)
                .setValue(this.selector.FO.Pinterest.email_input, 'prestotests+pinterest@gmail.com')
                .waitForExist(this.selector.FO.Pinterest.send_button, 90000)
                .click(this.selector.FO.Pinterest.send_button)
                .pause(3000)
                .getText(this.selector.FO.Pinterest.check_sent_email_p).then(function (value) {
                    console.log(value);
                should(value).be.equal("Password has been sent to your mailbox: prestotests+pinterest@gmail.com")
            })
                .url('https://' + URL)
                .call(done);

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Pinterest.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Pinterest.user_connected_span)
                .getText(this.selector.FO.Pinterest.user_connected_span).then(function (user) {
                should(user).be.equal('presto tests');
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
