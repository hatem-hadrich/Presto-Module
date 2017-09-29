'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test case n°2 = check upela account connection', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .url('http://' + URL + '/backoffice/')
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });

    describe('Account connection', function (done) {


        it('should go to the module configuration', function (done) {
            this.client
                .pause(5000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .waitForExist(this.selector.BO.ModulesPage.search_input, 90000)
                .setValue(this.selector.BO.ModulesPage.search_input, "upela")
                .waitForExist(this.selector.BO.ModulesPage.search_button, 90000)
                .click(this.selector.BO.ModulesPage.search_button)
                .getText(this.selector.BO.ModulesPage.number_of_module_found).then(function (text) {
                    global.nbr = text.indexOf('0');
                    if ((global.nbr !== -1)||(global.nbr === 0)){
                        done(new Error('The module you are searching for does not exist!'));
                    }
                })
                .waitForExist(this.selector.BO.ModulesPage.configuration_button, 90000)
                .click(this.selector.BO.ModulesPage.configuration_button)
                .pause(3000)
                .waitForExist(this.selector.BO.UpelaModulePage.connexion_subtab, 90000)
                .click(this.selector.BO.UpelaModulePage.connexion_subtab)
                .call(done);
        });

        it('should go to the module connection tabs and disconnect ' , function (done) {
            this.client
                .waitForExist(this.selector.BO.UpelaModulePage.disconnect_button, 90000)
                .click(this.selector.BO.UpelaModulePage.disconnect_button)
                .waitForExist(this.selector.BO.UpelaModulePage.connect_button, 90000)
                .click(this.selector.BO.UpelaModulePage.connect_button)
                .call(done)
        });

        it('should go to the module connection tabs and connect ' , function (done) {
            this.client
                .waitForExist(this.selector.BO.UpelaModulePage.production_mode_button, 90000)
                .click(this.selector.BO.UpelaModulePage.production_mode_button)
                .pause(5000)
                .waitForExist(this.selector.BO.UpelaModulePage.mail_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.mail_input,global.emailUpela)
                .waitForExist(this.selector.BO.UpelaModulePage.password_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.password_input, "prestashop_demo")
                .waitForExist(this.selector.BO.UpelaModulePage.setting_subtab, 90000)
                .click(this.selector.BO.UpelaModulePage.setting_subtab)
                .waitForExist(this.selector.BO.UpelaModulePage.success_panel, 90000)
                .getText(this.selector.BO.UpelaModulePage.success_panel).then(function (text) {
                    if (text!='Connexion réussie !'){
                        done(new Error('erreur de connexion'));
                    }else
                        done();
                });
        });





    });

});