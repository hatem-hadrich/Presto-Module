'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('Check blogs of blog pro module', function(){
	common.initMocha.call(this);
	
	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
	after(common.after);
		
		it('Open the shop and loggin FO', function(done){
		    global.fctname= this.test.title;
			this.client
                .url('http://' + URL +'/en/')
                .waitForExist(this.selector.access_loginFO, 90000)
                .click(this.selector.access_loginFO)
                .waitForExist(this.selector.loginFO, 90000)
                .setValue(this.selector.loginFO, 'pub@prestashop.com')
                .setValue(this.selector.passwordFO, '123456789')
                .click(this.selector.login_btnFO)
                .pause(3000)
                .call(done);
			
		});
		
	describe('Should go to check blogs', function(done){
        it('should check blog of categories', function(done){
		    global.fctname= this.test.title;
			this.client
                .waitForExist(this.selector.home_logo_url, 90000)
				.click(this.selector.home_logo_url)
				.waitForExist(this.selector.categories_blog, 90000)
                .getText(this.selector.categories_blog).then(function(text) {
					should(text).be.equal("There are not Categories yet.")
				})
			    .call(done);
		});
        it('should check blog of posts', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.posts_blog, 90000)
                .getText(this.selector.posts_blog).then(function(text) {
					should(text).be.equal("There are not Posts yet.")
				})
			    .call(done);
		});
        it('should check blog of comments', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.comments_blog, 90000)
                .getText(this.selector.comments_blog).then(function(text) {
					should(text).be.equal("There are not comments yet.")
				})
			    .call(done);
		});
        it('should check blog of archives', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.archives_blog, 90000)
                .getText(this.selector.archives_blog).then(function(text) {
					should(text).be.equal("There are not Archives yet.")
				})
			    .call(done);
		});
        it('should check blog of search', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.search_blog, 90000)
			    .call(done);
		});
	});
		
	describe('Log out in Front Office', function(done){
		it('should logout successfully in FO', function(done){
		    global.fctname= this.test.title;
			this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);
		});
	});
	
});