'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°4.2 : Add new post in BO', function(){
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
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Add post', function(done){
        it('Should go to the blog > Comments ', function(done){
            this.client
                .waitForExist(this.selector.blog_btn, 90000)
                .moveToObject(this.selector.blog_btn)
                .waitForExist(this.selector.comments_btn, 90000)
                .click(this.selector.comments_btn)
                .waitForExist(this.selector.comment_enable_status, 90000)
                .call(done);
        });

        it('should click on status button', function(done){
            this.client
                .waitForExist(this.selector.comment_enable_status, 90000)
                .click(this.selector.comment_enable_status)
                .pause(5000)
                .call(done);
        });

    });

    describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            this.client
                .signoutBO()
                .pause(2000)
                .call(done);
        });
    });
});