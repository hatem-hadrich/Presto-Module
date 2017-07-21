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
            .waitForExist(this.selector.login, 90000)
            .setValue(this.selector.login, 'basma.yangui@prestashop.com')
            .setValue(this.selector.password, 'barbar2017')
            .click(this.selector.login_btn)
            .waitForExist(this.selector.menu, 90000)
            .call(cb);
    });


    client.addCommand('signoutBO', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });

    client.addCommand('signoutBO2', function (cb) {
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
                    .windowHandleMaximize()
            } else {
                client = webdriverio
                    .remote(options)
                    .init()
                    .windowHandleMaximize()
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
