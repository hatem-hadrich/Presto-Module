'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

global.webservice_key='';

describe('Test case n°2 = Configuring the Upela account with prestashop', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .url('http://' + 'www.upela.com/fr/')
                .waitForExist(this.selector.login_upela, 90000)
                .click(this.selector.login_upela)
                .waitForExist(this.selector.Email_upela, 90000)
                .setValue(this.selector.Email_upela, 'fourat.achour@prestashop.com')
                .setValue(this.selector.passwordUpela, '242061')
                .click(this.selector.login_Upela)
                .call(done);
        });
    });

    describe(' Upela Shop configuration', function (done) {

        it('Go to " Mes Boutiques " ', function (done) {
            this.client
                .pause(5000)
                .waitForExist(this.selector.shop_param)
                .click(this.selector.shop_param)

                .waitForExist(this.selector.add_shop, 90000)
                .click(this.selector.add_shop)
                .call(done);
        });

        it('Go to " Platforme " ', function (done) {
            this.client
                .waitForExist(this.selector.platforme, 90000)
                .click(this.selector.platforme)
                .click(this.selector.platforme_prestashop)
                .waitForExist(this.selector.next_btn_upela, 90000)
                .click(this.selector.next_btn_upela)
                .call(done);
        });

        it('Go to " Identifiants " ', function (done) {
            this.client
                .waitForExist(this.selector.Shop_URL, 90000)
                .setValue(this.selector.Shop_URL, 'https://presto13071705.staging-prestashopready.net')

                .waitForExist(this.selector.api_key_upela, 90000)
                .setValue(this.selector.api_key_upela, global.webservice_key)

                .waitForExist(this.selector.next_step_upela, 90000)
                .click(this.selector.next_step_upela)
                .call(done);
        });

        it('Go to " Informations de la boutique " ', function (done) {
            this.client
                .waitForExist(this.selector.shop__upela)
                .setValue(this.selector.shop__upela, 'presto13071705')

                .waitForExist(this.selector.name_upela, 90000)
                .setValue(this.selector.name_upela, 'demo')

                .waitForExist(this.selector.Mobile_number_shop, 90000)
                .setValue(this.selector.Mobile_number_shop, '610001023')

                .waitForExist(this.selector.adresse_shop_upela, 90000)
                .setValue(this.selector.adresse_shop_upela, '83 Boulevard du Redon')

                .waitForExist(this.selector.pays_select, 90000)
                .click(this.selector.pays_select)
                .setValue(this.selector.pays_search_zone, 'france')
                .click(this.selector.pays_selected)

                .waitForExist(this.selector.postale_code, 90000)
                .setValue(this.selector.postale_code, '75005')

                .waitForExist(this.selector.ville_upela, 90000)
                .setValue(this.selector.ville_upela, 'paris')

                .waitForExist(this.selector.save_upela_btn, 90000)
                .click(this.selector.save_upela_btn)

                .getText('//*[@id="main"]/div[2]').then(function(text) {
                     if(text != "La boutique a été enregistrée" ){
                          done(new Error("Notification Prestafraud dosen't exist "));
                     }
                 })
                .call(done);
        });

    });

});