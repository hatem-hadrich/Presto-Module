'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with facebook in front office', function() {
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

    describe('Check facebook connection', function() {
        it('should click on facebook button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Facebook.first_facebook_logo, 90000)
                .click(this.selector.FO.Facebook.first_facebook_logo)
                .call(done);

        });
    });

    describe('Connection on facebook site', function() {

        it('should acces to facebook site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with facebook account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Facebook.username_input) === true){
                this.client
                    .pause(3000)
                    .waitForVisible(this.selector.FO.Facebook.username_input, 90000)
                    .setValue(this.selector.FO.Facebook.username_input, 'haptou28@gmail.com')
                    .setValue(this.selector.FO.Facebook.password_input, 'shinchikudohatemhadrich14091989')
                    .waitForExist(this.selector.FO.Facebook.login_button, 90000)
                    .click(this.selector.FO.Facebook.login_button)
                    .pause(5000)
                    .call(done);
            }else{
                this.client
                    // .waitForExist(this.selector.FO.Facebook.allow_button, 90000)
                    // .click(this.selector.FO.Facebook.allow_button)
                    .pause(2000)
                    .windowHandles().then(function (handles) {
                    return this.switchTab(handles.value[0]);
                })
                    .call(done);
            }

        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Facebook.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Facebook.user_connected_span)
                .getText(this.selector.FO.Facebook.user_connected_span).then(function (user) {
                //should(user).be.equal('Tests Presto');
                should(user).be.equal('Hatem Hadrich');
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
