'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('The Install of a Module', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);


    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('Install module', function (done) {
        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.modules_search, 90000)
                    .setValue(this.selector.modules_search, global.module_tech_name)
                    .click(this.selector.modules_search_button)
                    .pause(3000)
                    .call(done);
            }
        });

        it('should click on configure button', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.module_tech_name, 90000)
                    .click(this.selector.configure_module_btn)
                    .call(done);
            }
        });

        it('Should go to the configuration step ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_step, 90000)
                .click(this.selector.configuration_step)
                .call(done)
        });

        it('Should enter the Facebook Pixel ID ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_pixel_id_input, 90000)
                .setValue(this.selector.configuration_pixel_id_input, "239543053231383")
                .pause(2000)
                .call(done)
        });

        it('Should click on <button "Save"> ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_save_btn, 90000)
                .click(this.selector.configuration_save_btn)
                .pause(2000)
                .call(done)
        });

        it('Should check the green bloc ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_green_validation, 90000)
                .getText(this.selector.configuration_green_validation).then(function(text) {
                should(text).be.equal(""
                    +'×\nYour ID Pixel have been updated.'+
                    "")
            })
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });

});	