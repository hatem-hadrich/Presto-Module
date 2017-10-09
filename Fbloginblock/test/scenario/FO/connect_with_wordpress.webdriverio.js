'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Connecting with wordpress in front office', function() {
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

    describe('Check wordpress connection', function() {
        it('should click on wordpress button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Wordpress.first_wordpress_logo, 90000)
                .click(this.selector.FO.Wordpress.first_wordpress_logo)
                .call(done);

        });
    });

    describe('Connection on wordpress site', function() {


        it('should acces to wordpress site', function (done) {
            global.fctname = this.test.title;
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1]);
            })
                .call(done);
        });

        it('should connecting with wordpress account', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(7000)
                .waitForVisible(this.selector.FO.Wordpress.username_input, 90000)
                .click(this.selector.FO.Wordpress.username_input)
                .setValue(this.selector.FO.Wordpress.username_input, 'prestotests+wordpress@gmail.com')
                .click(this.selector.FO.Wordpress.password_input)
                .setValue(this.selector.FO.Wordpress.password_input, 'presto_tests')
                .waitForExist(this.selector.FO.Wordpress.login_button, 90000)
                .click(this.selector.FO.Wordpress.login_button)
                .pause(2000)
                .call(done);
        });

        it('should click on approve button', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.FO.Wordpress.allow_button, 90000)
                .click(this.selector.FO.Wordpress.allow_button)
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
                .waitForVisible(this.selector.FO.Wordpress.user_connected_span, 90000)
                .moveToObject(this.selector.FO.Wordpress.user_connected_span)
                .getText(this.selector.FO.Wordpress.user_connected_span).then(function (user) {
                should(user).be.equal('prestotests prestotests');
            })
                .call(done);

        });
    });
});
