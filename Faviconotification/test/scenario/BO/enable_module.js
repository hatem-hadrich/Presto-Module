'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');
var green_validation_is_visible = false;
global.red_validation_is_visible = false;


describe('The Activation of the Favicon Notification Module', function () {
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
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });


    describe('Enable module', function (done) {
        it('should go to modules page', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulesPage.modules_subtab, 90000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name)
                    .click(this.selector.BO.ModulesPage.search_button)
                    .call(done);
            }
        });

        it('should click on enable button', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.BO.ModulesPage.module_tech_name, 90000)
                    .click(this.selector.BO.ModulesPage.module_menu_button)
                    .waitForExist(this.selector.BO.ModulesPage.enable_module_button, 90000)
                    .click(this.selector.BO.ModulesPage.enable_module_button)
                    .waitForExist(this.selector.BO.Common.close_validation_button, 90000)
                    .isVisible(this.selector.BO.Common.red_validation_notice).then(function (isVisible) {
                        global.red_validation_is_visible = isVisible;
                    })
                    .isVisible(this.selector.BO.Common.green_validation_notice).then(function (isVisible) {
                        green_validation_is_visible = isVisible;
                    })
                    .call(done);
            }
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