'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with disqus in front office', function() {
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

    describe('Check disqus connection', function() {
        it('should click on disqus button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Disqus.first_disqus_logo, 90000)
                .click(this.selector.FO.Disqus.first_disqus_logo)
                .call(done);

        });
    });

    describe('Connection on disqus site', function() {


        it('should acces to disqus site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with disqus account', function (done) {
            global.fctname = this.test.title;
            if(this.client.isExisting(this.selector.FO.Disqus.username_input) === true){
                this.client
                    .waitForExist(this.selector.FO.Disqus.username_input, 90000)
                    .setValue(this.selector.FO.Disqus.username_input, 'prestotests+disqus@gmail.com')
                    .setValue(this.selector.FO.Disqus.password_input, 'presto_tests')
                    .waitForExist(this.selector.FO.Disqus.allow_button, 90000)
                    .click(this.selector.FO.Disqus.allow_button)
                    .pause(2000)
                    .call(done);
            }else{
                this.client
                    .waitForExist(this.selector.FO.Disqus.accept_button, 90000)
                    .click(this.selector.FO.Disqus.accept_button)
                    .pause(2000)
                    .windowHandles().then(function (handles) {
                        this.close(handles.value[handles.value.length - 1]);
                        return this.switchTab(handles.value[0]);
                    })
                    .call(done);
            }
        });
        it('should check the connection', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(2000)
                .waitForVisible(this.selector.FO.Disqus.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Disqus.user_connected_span)
                .getText(this.selector.FO.Disqus.user_connected_span).then(function (user) {
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
