'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

var visible_username_input = false;

describe('Connecting with google in front office', function() {
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

    describe('Check google connection', function() {
        it('should click on google button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Google.first_google_logo, 90000)
                .click(this.selector.FO.Google.first_google_logo)
                .call(done);

        });
    });

    describe('Connection on google site', function() {


        it('should acces to google site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .pause(2000)
                .isVisible(this.selector.FO.Google.username_input).then(function (visible) {
                visible_username_input = visible;
            })
                .call(done);
        });

        it('should connecting with google account', function (done) {
            global.fctname = this.test.title;
            if(visible_username_input){
                this.client
                    .waitForExist(this.selector.FO.Google.username_input, 90000)
                    .setValue(this.selector.FO.Google.username_input, 'prestotests@gmail.com')
                    .waitForExist(this.selector.FO.Google.identifier_next_button, 90000)
                    .click(this.selector.FO.Google.identifier_next_button)
                    .pause(5000)
                    .waitForVisible(this.selector.FO.Google.password_input, 90000)
                    .setValue(this.selector.FO.Google.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Google.password_next_button, 90000)
                    .click(this.selector.FO.Google.password_next_button)
                    .pause(5000)
                    .call(done);
            }else{
                this.client
                    .waitForExist(this.selector.FO.Google.user_link, 90000)
                    .click(this.selector.FO.Google.user_link)
                    .pause(5000)
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
                .waitForVisible(this.selector.FO.Google.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Google.user_connected_span)
                .getText(this.selector.FO.Google.user_connected_span).then(function (user) {
                should(user).be.equal('Presto Tests');
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
