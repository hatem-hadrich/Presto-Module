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
        it('should go to boutique webservice parameter page', function (done) {
            this.client
                .waitForExist(this.selector.advanced_parameters, 90000)
                .moveToObject(this.selector.advanced_parameters)
                .waitForExist(this.selector.webservice_param, 90000)
                .click(this.selector.webservice_param)
                .call(done);
        });

        it('activate webservice use , activate Mode Cgi de PHP', function (done) {
            this.client
                .waitForExist(this.selector.cgi_activation, 90000)
                .click(this.selector.cgi_activation)

                .waitForExist(this.selector.webserice_activation, 90000)
                .click(this.selector.webserice_activation)

                .waitForExist(this.selector.parametre_websrvice_activation, 90000)
                .click(this.selector.parametre_websrvice_activation)

                .waitForExist(this.selector.update_status, 90000)
                .call(done);
        });

        it('add new websrvice', function (done) {
            this.client
                .waitForExist(this.selector.add_webservice_btn, 90000)
                .click(this.selector.add_webservice_btn)
                .waitForExist(this.selector.compte_web_service_page, 90000)
                .call(done);
        });

        it('webservice configiration', function (done) {
            this.client
                .waitForExist(this.selector.webservice_generation, 90000)
                .click(this.selector.webservice_generation)
                .pause(1000)
                .waitForExist(this.selector.active_webservice, 90000)
                .click(this.selector.active_webservice)
                .pause(1000)
                .waitForExist(this.selector.adress_permission, 90000)
                .click(this.selector.adress_permission)
                .pause(1000)
                .waitForExist(this.selector.carrier_permission, 90000)
                .click(this.selector.carrier_permission)
                .pause(1000)
                .waitForExist(this.selector.config_permission, 90000)
                .click(this.selector.config_permission)
                .pause(1000)
                .waitForExist(this.selector.countrie_permission, 90000)
                .click(this.selector.countrie_permission)
                .pause(1000)
                .waitForExist(this.selector.costumers_permission, 90000)
                .click(this.selector.costumers_permission)
                .pause(1000)
                .waitForExist(this.selector.order_carriers_permission, 90000)
                .click(this.selector.order_carriers_permission)
                .pause(1000)
                .waitForExist(this.selector.order_carriers_permission_put, 90000)
                .click(this.selector.order_carriers_permission_put)
                .pause(1000)
                .waitForExist(this.selector.order_history_post, 90000)
                .click(this.selector.order_history_post)
                .pause(1000)
                .waitForExist(this.selector.orders_hitory, 90000)
                .click(this.selector.orders_hitory)
                .pause(1000)
                .waitForExist(this.selector.order_status, 90000)
                .click(this.selector.order_status)
                .pause(1000)
                .waitForExist(this.selector.orders_upela, 90000)
                .click(this.selector.orders_upela)
                .pause(1000)
                .waitForExist(this.selector.products_upela, 90000)
                .click(this.selector.products_upela)
                .pause(1000)
                .waitForExist(this.selector.status_permission, 90000)
                .click(this.selector.status_permission)
                .pause(1000)
                .call(done);
        });

        it('save webservice and copie it', function (done) {
            this.client
                .waitForExist(this.selector.save_webservice, 90000)
                .click(this.selector.save_webservice)
                .waitForExist(this.selector.update_status, 90000)
                .getText('//*[@id="form-webservice_account"]/div/div[2]/table/tbody/tr/td[1]').then(function(text) {
                       global.webservice_key = text;
                 })
                .call(done);
        });
    });



});