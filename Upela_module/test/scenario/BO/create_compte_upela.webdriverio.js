'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

global.webservice_key='';

describe('Test case n°1 = Check the creation of an Upela account', function () {
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


    describe(' Webservice configuration', function (done) {

        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)

                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)

                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            this.client
                .waitForExist(this.selector.modules_search, 90000)
                .setValue(this.selector.modules_search, "upela")

                .waitForExist(this.selector.modules_search_button, 90000)
                .click(this.selector.modules_search_button)

                .waitForExist(this.selector.multi_option_btn, 90000)
                .click(this.selector.multi_option_btn)

                .waitForExist(this.selector.config_btn, 90000)
                .click(this.selector.config_btn)

                .call(done);
        });

        it('should go to the module', function (done) {
            this.client
            .click(this.selector.compte_create)
            .call(done);
        });

        it('user parameter entry ', function (done) {
            this.client
                .waitForExist(this.selector.name_upla, 90000)
                .setValue(this.selector.name_upla, "Demo")

                .waitForExist(this.selector.last_name_upela, 90000)
                .setValue(this.selector.last_name_upela, "Demo")

                .waitForExist(this.selector.email_upela, 90000)
                .setValue(this.selector.email_upela, "test@prestashop.com")

                .waitForExist(this.selector.mobile_number, 90000)
                .setValue(this.selector.mobile_number, "6 10 00 10 23")

                .waitForExist(this.selector.password_upela, 90000)
                .setValue(this.selector.password_upela, "prestashop_demo")

                .waitForExist(this.selector.confirm_password, 90000)
                .setValue(this.selector.confirm_password, "prestashop_demo")

                .call(done);

        });

        it('Company parameter entry ', function (done) {

            this.client
                .waitForExist(this.selector.company_tab, 90000)
                .click(this.selector.company_tab)


                .waitForExist(this.selector.professional_address, 90000)
                .click(this.selector.professional_address)

                .waitForExist(this.selector.first_adresse, 90000)
                .setValue(this.selector.first_adresse, "21 rue poliveau ")

                .waitForExist(this.selector.pays_upela_compte, 90000)
                .click(this.selector.pays_upela_compte)
                .click(this.selector.pays_FR)

                .waitForExist(this.selector.postal_code, 90000)
                .setValue(this.selector.postal_code, "75005")

                .waitForExist(this.selector.ville, 90000)
                .setValue(this.selector.ville, "paris")

                .waitForExist(this.selector.immatriculation, 90000)
                .setValue(this.selector.immatriculation, "0123456789")

                .call(done);

        });

        it('Boutique parameter entry ', function (done) {
            this.client
                .waitForExist(this.selector.shop_tab, 90000)
                .click(this.selector.shop_tab)

                .waitForExist(this.selector.shop_name_upela, 90000)
                .setValue(this.selector.shop_name_upela, "My store storetore ")

                .waitForExist(this.selector.shop_adresse, 90000)
                .setValue(this.selector.shop_adresse, "31 rue du Louvre")

                .waitForExist(this.selector.shop_pays, 90000)
                .click(this.selector.shop_pays)
                .click(this.selector.shop_FR)

                .waitForExist(this.selector.shop_postale_code, 90000)
                .setValue(this.selector.shop_postale_code, "75005")

                .waitForExist(this.selector.shop_ville, 90000)
                .setValue(this.selector.shop_ville, "paris")

                .waitForExist(this.selector.webservice_key_shop, 90000)
                .setValue(this.selector.webservice_key_shop, webservice_key)

                .waitForExist(this.selector.save_adding_shop, 90000)
                .click(this.selector.save_adding_shop)

                .call(done);
        });
    });

});