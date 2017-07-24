'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('Test case n°3.2 : Check the previous post in FO', function(){
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
		
	describe('Check the previous post', function(done){
        it('should go to the home page and check the new post', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist(this.selector.home_logo_url, 90000)
				.click(this.selector.home_logo_url)
				.waitForExist(this.selector.posts_blog, 90000)
				.pause(2000)
				.getText(this.selector.post_name_in_footer).then(function(name){
					if(name != ""){
                        should(name).be.equal("post-" + date_time);
					}else{
						done(new Error('there are no posts yet.'));
					}

				})
			    .call(done);
		});
        it('should click on the post and check it', function(done){
		    global.fctname= this.test.title;
			this.client
                .click(this.selector.post_name_in_footer)
                .pause(2000)
                .getText(this.selector.post_blog_title).then(function(name){
                	should(name).be.equal("post-" + date_time);
				})
				.pause(2000)
                .getText(this.selector.post_blog_like_number).then(function(like_number){
                	var like = parseInt(like_number);
                	should(like).be.equal(0);
				})
				.pause(2000)
                .getText(this.selector.post_blog_related_product_title).then(function(related_product_title){
                	should(related_product_title).be.equal("Blouse");
				})
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