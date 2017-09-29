'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test case n°3 = check upela account connection', function () {
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
                .call(done);
        });


        it('should Create a Shop using an Upela account', function (done) {
            this.client
                .waitForExist(this.selector.BO.UpelaModulePage.connexion_subtab, 90000)
                .click(this.selector.BO.UpelaModulePage.connexion_subtab)
                .waitForExist(this.selector.BO.UpelaModulePage.shop_creation_button, 90000)
                .click(this.selector.BO.UpelaModulePage.shop_creation_button)
                .call(done);
        });

       it('shop settings', function (done) {
            this.client
                .waitForExist(this.selector.BO.UpelaModulePage.name_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.name_input, "Demo")
                .waitForExist(this.selector.BO.UpelaModulePage.last_name_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.last_name_input, "PrestaShop")
                .waitForExist(this.selector.BO.UpelaModulePage.mail_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.mail_input,global.emailUpela)
                .waitForExist(this.selector.BO.UpelaModulePage.mobile_number_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.mobile_number_input, "0123-456-789")
                .waitForExist(this.selector.BO.UpelaModulePage.shop_name_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.shop_name_input, "Presto")
                .waitForExist(this.selector.BO.UpelaModulePage.shop_adresse_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.shop_adresse_input, "31 rue du Louvre")
                .waitForExist(this.selector.BO.UpelaModulePage.shop_country, 90000)
                .click(this.selector.BO.UpelaModulePage.shop_country)
                .click(this.selector.BO.UpelaModulePage.shop_FR)
                .waitForExist(this.selector.BO.UpelaModulePage.shop_postale_code_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.shop_postale_code_input, "75005")
                .waitForExist(this.selector.BO.UpelaModulePage.shop_ville_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.shop_ville_input, "paris")
                .waitForExist(this.selector.BO.UpelaModulePage.webservice_input, 90000)
                .setValue(this.selector.BO.UpelaModulePage.webservice_input, global.webserviceKey)
                .waitForExist(this.selector.BO.UpelaModulePage.save_shop_button,9000)
                .click(this.selector.BO.UpelaModulePage.save_shop_button)
                .waitForExist(this.selector.BO.UpelaModulePage.success_panel,9000)
                .getText(this.selector.BO.UpelaModulePage.success_panel).then(function (text) {
                    if (text!=='Boutique créée !'){
                       done(new Error('Error when create a shop! '));
                    }
                 })
                .waitForExist(this.selector.BO.UpelaModulePage.Upela_website_button, 90000)
                .click(this.selector.BO.UpelaModulePage.Upela_website_button)
                .call(done);
        });

    });


    describe('Store verification', function (done) {
        it('Upela Account and Store verification', function (done) {
            this.client
                .getTabIds().then(function (handles) {
                    return this.switchTab(handles[handles.length - 1]);
                })
                .waitForExist(this.selector.UPELASITE.title, 90000)
                .waitForExist(this.selector.UPELASITE.mes_boutique_button, 5000)
                .click(this.selector.UPELASITE.mes_boutique_button)
                .waitForExist(this.selector.UPELASITE.store_subtab, 5000)
                .click(this.selector.UPELASITE.store_subtab)
                .waitForExist(this.selector.UPELASITE.download_command_button, 5000)
                .click(this.selector.UPELASITE.download_command_button)
                .waitForVisible(this.selector.UPELASITE.succes_modal, 3000)
                .waitForExist(this.selector.UPELASITE.success_message, 5000)
                .getText(this.selector.UPELASITE.second_shop_success).then(function (text) {
                    if (text !== "Les commandes ont été téléchargées avec succès." ){
                        done(new Error("Orders have not been uploaded"));
                    }else
                        done();
                });
        });
    });

});