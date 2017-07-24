'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°5.3 : Add new category in BO', function(){
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

    describe('Add category', function(done){
        it('Should go to the blog > Categories', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .click(this.selector.blog_btn)
                .waitForExist(this.selector.add_new_category_btn, 90000)
                .call(done);
        });

        it('should click on button Add new category ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.add_new_category_btn, 90000)
                .click(this.selector.add_new_category_btn)
                .pause(5000)
                .call(done);
        });

        it('Should enter the title of category ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_title, 90000)
                .setValue(this.selector.category_title, 'category3-' + date_time)
                .pause(2000)
                .waitForExist(this.selector.category_keywords, 90000)
                .call(done);
        });

        it('Should enter the SEO Keywords of category ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_keywords, 90000)
                .setValue(this.selector.category_keywords, 'Category-1, Category-2, Category-3, Category-4')
                .pause(2000)
                .waitForExist(this.selector.category_description, 90000)
                .call(done);
        });

        it('Should enter the SEO Description of category ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.category_description, 90000)
                .setValue(this.selector.category_description, 'this is the description of category !!')
                .waitForExist(this.selector.category_shop_association, 90000)
                .call(done)
        });

        it('Should select the shop association ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_shop_association, 90000)
                .click(this.selector.category_shop_association)
                .pause(2000)
                .waitForExist(this.selector.category_status, 90000)
                .call(done);
        });

        it('Should enable the category ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_status, 90000)
                .click(this.selector.category_status)
                .pause(2000)
                .waitForExist(this.selector.category_save_btn, 90000)
                .call(done);
        });

        it('Should click on button Save ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.category_save_btn, 90000)
                .click(this.selector.category_save_btn)
                .pause(5000)
                .call(done);
        });

    });

    describe('Check category in BO', function(done){
        it('Should check green block displayed ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_green_bloc, 90000)
                .getText(this.selector.category_green_bloc).then(function(text) {
                    should(text).be.equal('×\nSuccessful creation.');
                })
                .call(done);
        });
        it('Should check the previous category title ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.category_filter_title, 90000)
                .setValue(this.selector.category_filter_title, "category3-" + date_time)
                .click(this.selector.category_filter_search_btn, 90000)
                .pause(2000)
                .getText(this.selector.categories_title_table).then(function(text) {
                should(text).be.equal("category3-" + date_time)
            })
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