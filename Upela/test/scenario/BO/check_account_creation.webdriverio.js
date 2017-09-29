'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test case n°1 = check account creation', function () {
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


    describe('Check the existence of the Web service', function (done) {

        it('should go to boutique webservice parameter page', function (done) {
            this.client
                .waitForExist(this.selector.BO.AdvancedParametersPage.menu, 90000)
                .moveToObject(this.selector.BO.AdvancedParametersPage.menu)
                .waitForExist(this.selector.BO.AdvancedParametersPage.Webservice, 90000)
                .click(this.selector.BO.AdvancedParametersPage.Webservice)
                .call(done);
        });

        it('Search for Upela Web service and copy it', function (done) {
            this.client
                .waitForExist(this.selector.BO.AdvancedParametersPage.WebserviceOption.search_input, 90000)
                .setValue(this.selector.BO.AdvancedParametersPage.WebserviceOption.search_input, 'upela')
                .waitForExist(this.selector.BO.AdvancedParametersPage.WebserviceOption.search_button, 90000)
                .click(this.selector.BO.AdvancedParametersPage.WebserviceOption.search_button)
                .getText(this.selector.BO.AdvancedParametersPage.WebserviceOption.Upela_webservice).then(function(text) {
                    global.webserviceKey = text;
                })
                .call(done);
        });

    });

    describe('Account creation and verification', function (done) {

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


        describe('Account creation', function (done) {
            it('account settings', function (done) {
                this.client
                    .pause(1000)
                    .waitForExist(this.selector.BO.UpelaModulePage.production_mode_button, 90000)
                    .click(this.selector.BO.UpelaModulePage.production_mode_button)
                    .waitForExist(this.selector.BO.UpelaModulePage.create_account_button, 90000)
                    .click(this.selector.BO.UpelaModulePage.create_account_button)
                    .waitForExist(this.selector.BO.UpelaModulePage.name_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.name_input, "Demo")
                    .waitForExist(this.selector.BO.UpelaModulePage.last_name_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.last_name_input, "Demo")
                    .waitForExist(this.selector.BO.UpelaModulePage.mail_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.mail_input, global.emailUpela)
                    .waitForExist(this.selector.BO.UpelaModulePage.mobile_number_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.mobile_number_input, "6 10 00 10 23")
                    .waitForExist(this.selector.BO.UpelaModulePage.password_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.password_input, "prestashop_demo")
                    .waitForExist(this.selector.BO.UpelaModulePage.confirm_password_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.confirm_password_input, "prestashop_demo")
                    .call(done);

            });

            it('company settings', function (done) {
                this.client
                    .waitForExist(this.selector.BO.UpelaModulePage.company_subtab, 90000)
                    .click(this.selector.BO.UpelaModulePage.company_subtab)
                    .waitForExist(this.selector.BO.UpelaModulePage.professional_address_input, 90000)
                    .click(this.selector.BO.UpelaModulePage.professional_address_input)
                    .waitForExist(this.selector.BO.UpelaModulePage.adresse_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.adresse_input, "21 rue poliveau ")
                    .waitForExist(this.selector.BO.UpelaModulePage.pays, 90000)
                    .click(this.selector.BO.UpelaModulePage.pays)
                    .click(this.selector.BO.UpelaModulePage.pays_FR)
                    .waitForExist(this.selector.BO.UpelaModulePage.postal_code_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.postal_code_input, "75005")
                    .waitForExist(this.selector.BO.UpelaModulePage.ville_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.ville_input, "paris")
                    .waitForExist(this.selector.BO.UpelaModulePage.immatriculation_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.immatriculation_input, "0123456789")
                    .call(done);

            });

            it('shop settings', function (done) {
                this.client
                    .waitForExist(this.selector.BO.UpelaModulePage.shop_subtab, 90000)
                    .click(this.selector.BO.UpelaModulePage.shop_subtab)
                    .waitForExist(this.selector.BO.UpelaModulePage.shop_name_input, 90000)
                    .setValue(this.selector.BO.UpelaModulePage.shop_name_input, "My store")
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
                    .setValue(this.selector.BO.UpelaModulePage.webservice_input, webserviceKey)
                    .call(done);
            });

            it('account and shop creation', function (done) {
                this.client
                    .waitForExist(this.selector.BO.UpelaModulePage.save_shop_button, 90000)
                    .click(this.selector.BO.UpelaModulePage.save_shop_button)
                    .waitForExist(this.selector.BO.UpelaModulePage.success_panel, 90000)
                    .getText(this.selector.BO.UpelaModulePage.success_panel).then(function (text) {
                        if (text != "Bienvenue dans Upela, votre compte est créé !" ){
                            done(new Error("Account creation failed"));
                        }
                    })
                    .getText(this.selector.BO.UpelaModulePage.success_created_shop).then(function (text) {
                        if (text != "Boutique créée !" ){
                            done(new Error("Shop creation failed"));
                        }
                    })
                    .waitForExist(this.selector.BO.UpelaModulePage.Upela_website_button, 90000)
                    .click(this.selector.BO.UpelaModulePage.Upela_website_button)
                    .call(done);
            });

        });

        describe('Account verification', function (done) {

              it('upela Account and Store verification', function (done) {
                  this.client
                      .getTabIds().then(function (handles) {
                          this.switchTab(handles[handles.length - 1]);
                      })
                      .waitForExist(this.selector.UPELASITE.title, 90000)
                      .waitForExist(this.selector.UPELASITE.mes_boutique_button, 90000)
                      .click(this.selector.UPELASITE.mes_boutique_button)
                      .waitForExist(this.selector.UPELASITE.store_subtab, 90000)
                      .click(this.selector.UPELASITE.store_subtab)
                      .waitForExist(this.selector.UPELASITE.download_command_button, 5000)
                      .click(this.selector.UPELASITE.download_command_button)
                      .waitForVisible(this.selector.UPELASITE.succes_modal, 3000)
                      .waitForExist(this.selector.UPELASITE.success_message, 5000)
                      .getText(this.selector.UPELASITE.success_message).then(function (text) {
                          if (text != "Les commandes ont été téléchargées avec succès." ){
                              done(new Error("Orders have not been uploaded"));
                          }else
                              done();
                      })
                });

        });

    });

});