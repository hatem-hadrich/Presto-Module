'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('Check the previous post in FO', function(){
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
		
	describe('Check the previous comment ', function(done){
        it('should go to the home page and check it ', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist(this.selector.home_logo_url, 90000)
				.click(this.selector.home_logo_url)
				.waitForExist(this.selector.posts_blog, 90000)
				.pause(2000)
				.getText(this.selector.comment_name_in_footer).then(function(name){
					if(name != ""){
                        should(name).be.equal("test");
					}else{
						done(new Error('there are no posts yet.'));
					}

				})
			    .call(done);
		});
        it('should click on comment and check the number of comments ', function(done){
		    global.fctname= this.test.title;
			this.client
                .click(this.selector.comment_name_in_footer)
                .pause(2000)
                .isVisible(this.selector.comment_blog_comment_number).then(function (isVisible) {
					if(isVisible != true){
						done(new Error('There are no comments yet.'));
					}
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