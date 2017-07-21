'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Configure module in BO', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
            global.fctname= this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Configure categories and posts', function (done) {
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
                    .setValue(this.selector.modules_search, "blockblog")
                    .click(this.selector.modules_search_button)
                    .pause(3000)
                    .call(done);
            }
        });

        it('should go to the blog settings', function (done) {
            this.client
                .click(this.selector.configure_module_btn)
                .waitForExist(this.selector.blog_settings_module_step, 90000)
                .click(this.selector.blog_settings_module_step)
                .pause(2000)
                .waitForExist(this.selector.categories_settings_module_btn, 90000)
                .call(done);
        });

        it('should go to the categories settings', function (done) {
            this.client
                .waitForExist(this.selector.categories_settings_module_btn, 90000)
                .click(this.selector.categories_settings_module_btn)
                .pause(2000)
                .setValue(this.selector.categories_per_pages_input, 2)
                .click(this.selector.categories_settings_save_btn)
                .call(done);
        });

        it('should go to the post settings', function (done) {
            this.client
                .waitForExist(this.selector.posts_settings_module_step, 90000)
                .click(this.selector.posts_settings_module_step)
                .pause(2000)
                .waitForExist(this.selector.posts_per_pages_input, 90000)
                .setValue(this.selector.posts_per_pages_input, 2)
                .click(this.selector.posts_display_date_on_list_post_view)
                .pause(2000)
                .moveToObject(this.selector.posts_update_btn)
                .click(this.selector.posts_update_btn)
                .pause(3000)
                .call(done);
        });

    });

    describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            global.fctname= this.test.title;
            this.client
                .signoutBO()
                .pause(2000)
                .call(done);
        });
    });
});