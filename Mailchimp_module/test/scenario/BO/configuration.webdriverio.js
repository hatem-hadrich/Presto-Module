'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('Test case n°1 = Check module configuration', function () {
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


    describe('Check module configuration', function (done) {


        it('should go to modules configuration page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .setValue(this.selector.modules_search, "mailchimp")
                .click(this.selector.search_btn)
                .waitForExist(this.selector.config_btn)
                .click(this.selector.config_btn)
                .pause(2000)
                .call(done);
        });


        it('connect mailchimp to the store ', function (done) {
            this.client
                .waitForExist(this.selector.connect_store_btn,9000)
                .click(this.selector.connect_store_btn)

                .waitForExist(this.selector.login_acces_mailchimp, 90000)
                .setValue(this.selector.login_acces_mailchimp, "prestashoptests")

                .waitForExist(this.selector.password_acces_mailchimp, 90000)
                .setValue(this.selector.password_acces_mailchimp, "Prestashop_demo1")

                .waitForExist(this.selector.login_mailchimp,90000)
                .click(this.selector.login_mailchimp)

                .call(done);
        });

        it('verify la redirection vers notre boutique et l importation des mailchimp liste   ', function (done) {
            this.client
                .waitForExist(this.selector.mailchimp_panel,90000)
                .getText(this.selector.mailchimp_panel).then(function(text) {
                    if(text != "Setup MailChimp integration" ){
                        done(new Error("Connect to mailchimp Failed"));
                    }
                })
                .getText(this.selector.mailchimp_listes).then(function(text) {
                    if(text != "Prestashop" ){
                        done(new Error("Importation e-mail list failes"));
                    }
                })
                .selectByIndex(this.selector.email_list,1)
                .waitForExist(this.selector.save_mailchimp_liste,90000)
                .click(this.selector.save_mailchimp_liste)
                .call(done);
        });




        it('Verify connection to the list', function (done) {
            this.client
                .getText(this.selector.connect_msg).then(function(text) {
                    if(text != "Connected to list Prestashop" ){
                        done(new Error("connection de prestashop list Failed"));
                    }
                 })
                .call(done);
        });

    });



});