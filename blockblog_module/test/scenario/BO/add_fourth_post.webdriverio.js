'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°5.6 : Add new post in BO', function(){
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

    describe('Add post', function(done){
        it('Should go to the blog > Post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.blog_btn, 90000)
                .moveToObject(this.selector.blog_btn)
                .waitForExist(this.selector.posts_btn, 90000)
                .click(this.selector.posts_btn)
                .waitForExist(this.selector.add_new_post_btn, 90000)
                .call(done);
        });

        it('should click on button Add new post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.add_new_post_btn, 90000)
                .click(this.selector.add_new_post_btn)
                .pause(5000)
                .call(done);
        });

        it('Should enter the title of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_title, 90000)
                .setValue(this.selector.post_title, 'post3-' + date_time)
                .pause(2000)
                .waitForExist(this.selector.post_keywords, 90000)
                .call(done);
        });

        it('Should enter the SEO Keywords of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_keywords, 90000)
                .setValue(this.selector.post_keywords, 'Post-1, Post-2, Post-3, Post-4')
                .pause(2000)
                .waitForExist(this.selector.post_description, 90000)
                .call(done);
        });

        it('Should enter the SEO Description of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_description, 90000)
                .setValue(this.selector.post_description, 'this is the description of post !!')
                .waitForExist(this.selector.post_source_code_content_btn, 90000)
                .call(done)
        });

        it('Should enter the content of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_source_code_content_btn, 90000)
                .click(this.selector.post_source_code_content_btn)
                .waitForExist(this.selector.post_content_textarea, 90000)
                .setValue(this.selector.post_content_textarea, "<p>this is the content of post !!</p>")
                .waitForExist(this.selector.post_content_btn, 90000)
                .click(this.selector.post_content_btn)
                .pause(2000)
                .call(done)
        });

        it('Should select a category ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_select_category3_checkbox, 90000)
                .click(this.selector.post_select_category3_checkbox)
                .pause(2000)
                .call(done)
        });

        it('Should select a related product ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.post_related_product_search, 90000)
                .setValue(this.selector.post_related_product_search, 'blouse (ref: demo_2)')
                .pause(2000)
                .click(this.selector.post_related_product_option)
                .pause(2000)
                .isVisible(this.selector.post_related_product_selected).then(function (isVisible) {
                    if(isVisible != true){
                        done(new Error('There are no product selected yet.'));
                    }
                })
                .call(done)
        });

        it('Should select a related post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_related_post3_checkbox, 90000)
                .click(this.selector.post_related_post3_checkbox)
                .pause(2000)
                .call(done)
        });

        it('Should select the shop association ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_shop_association, 90000)
                .click(this.selector.post_shop_association)
                .pause(2000)
                .waitForExist(this.selector.post_enable_comments, 90000)
                .call(done);
        });

        it('Should enable the comments of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_enable_comments, 90000)
                .click(this.selector.post_enable_comments)
                .pause(2000)
                .waitForExist(this.selector.post_status, 90000)
                .call(done);
        });

        it('Should enable the status of post ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.post_status, 90000)
                .click(this.selector.post_status)
                .pause(2000)
                .waitForExist(this.selector.post_save_btn, 90000)
                .call(done);
        });

        it('Should click on button Save ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.post_save_btn, 90000)
                .click(this.selector.post_save_btn)
                .pause(5000)
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