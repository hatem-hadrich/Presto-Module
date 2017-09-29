'use strict';
var client;
var webdriverio = require('webdriverio');
var globals = require('./globals.webdriverio');
var only_filename = __filename.slice(__dirname.length + 1, -3);

var options = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
    },
    port: 4444
};

var options2 = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        username: process.env.SAUCE_USERNAME,
        access_key: process.env.SAUCE_ACCESS_KEY,
        screenResolution: "1680x1050",
        platform: "Windows 7",
    },
    port: 4445
};

function initCommands(client) {

    client.addCommand('signinBO', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL + '/backoffice/')
            .waitForExist(this.selector.BO.AccessPage.login_input, 90000)
            .setValue(this.selector.BO.AccessPage.login_input, email)
            .setValue(this.selector.BO.AccessPage.password_input, password)
            .click(this.selector.BO.AccessPage.login_button)
            .waitForExist(this.selector.BO.Common.menu, 90000)
            .call(cb);
    });

    client.addCommand('signinFO', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL)
            .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
            .click(this.selector.FO.AccessPage.access_loginFO)
            .waitForExist(this.selector.FO.AccessPage.login_input, 90000)
            .setValue(this.selector.FO.AccessPage.login_input, 'pub@prestashop.com')
            .setValue(this.selector.FO.AccessPage.password_input, '123456789')
            .click(this.selector.FO.AccessPage.login_button)
            .call(cb);
    });

    client.addCommand('signoutBO', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });

    client.addCommand('signoutFO', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });
}
module.exports = {
    getClient: function () {
        if (client) {
            return client;
        } else {
            if (typeof saucelabs !== 'undefined' && saucelabs != "None") {
                client = webdriverio
                    .remote(options2)
                    .init()
                    .windowHandleSize({width: 1280, height: 1024});
            } else {
                client = webdriverio
                    .remote(options)
                    .init()
                    .windowHandleSize({width: 1280, height: 1024});
            }
            initCommands(client);

            return client;
        }
    },
    after: function (done) {
        done();
    },
    initMocha: function () {
        this.timeout(900000000);
        this.slow(45000);
    }
};
