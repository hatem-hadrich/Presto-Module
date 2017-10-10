'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with microsoft in front office', function() {
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

    describe('Check microsoft connection', function() {
        it('should click on microsoft button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Microsoft.first_microsoft_logo, 90000)
                .click(this.selector.FO.Microsoft.first_microsoft_logo)
                .call(done);
        });
    });

    describe('Connection on microsoft site', function() {

        it('should acces to microsoft site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with microsoft account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Microsoft.username_input) === true){
                this.client
                    .waitForVisible(this.selector.FO.Microsoft.username_input, 90000)
                    .setValue(this.selector.FO.Microsoft.username_input, 'prestotests@outlook.com')
                    .waitForExist(this.selector.FO.Microsoft.next_button, 90000)
                    .click(this.selector.FO.Microsoft.next_button)
                    .pause(2000)
                    .waitForVisible(this.selector.FO.Microsoft.password_input, 90000)
                    .setValue(this.selector.FO.Microsoft.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Microsoft.next_button, 90000)
                    .click(this.selector.FO.Microsoft.next_button)
                    .pause(2000)
                    .call(done);
            }else{
                this.client
                    .call(done);
            }
        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                this.close(handles.value[handles.value.length - 1]);
                return this.switchTab(handles.value[0]);
            })
                .pause(5000)
                .waitForExist(this.selector.FO.Microsoft.user_connected_span, 90000)
                .getText(this.selector.FO.Microsoft.user_connected_span).then(function (user) {
                should(user).be.equal('Tests Presto');
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
