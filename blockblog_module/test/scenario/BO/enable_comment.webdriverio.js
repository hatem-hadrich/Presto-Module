'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Add new post in BO', function(){
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
        it('Should go to the blog > Post', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .url('http://' + URL + '/admin-dev/index.php?controller=AdminBlockblogcomments')
                .waitForExist('//*[@id="form-blog_comments"]/div/div[2]/table/tbody/tr/td[7]/span/span', 90000)
                .call(done);
        });

        it('should click on status button', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist('//*[@id="form-blog_comments"]/div/div[2]/table/tbody/tr/td[7]/span/span', 90000)
                .click('//*[@id="form-blog_comments"]/div/div[2]/table/tbody/tr/td[7]/span/span')
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