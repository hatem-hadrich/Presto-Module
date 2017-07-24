'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('Test case n°5.8 : Check the previous category in FO', function(){
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
		
	describe('Check the previous category', function(done){
        it('should go to the home page', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist(this.selector.home_logo_url, 90000)
				.click(this.selector.home_logo_url)
				.waitForExist(this.selector.categories_blog, 90000)
				.pause(2000)
			    .call(done);
		});
        it('should click on button view all categories ', function(done){
		    global.fctname= this.test.title;
			this.client
				.click(this.selector.view_all_categories_btn)
				.waitForExist(this.selector.nbr_categories, 90000)
				.pause(2000)
				.getText(this.selector.nbr_categories).then(function (value) {
					should(value).be.equal("Categories ( 4 )");
				})
			    .call(done);
		});
        it('should check the number of pages in blog categories', function(done){
		    global.fctname= this.test.title;
			this.client
				.waitForExist(this.selector.nbr_pages_in_categories, 90000)
				.pause(2000)
				.getText(this.selector.nbr_pages_in_categories).then(function (number) {
					var nbr = parseInt(number);
					if(nbr != 2){
						done(new Error("you don't have 2 pages"));
					}
				})
			    .call(done);
		});
        it('should click on button view all posts ', function(done){
            global.fctname= this.test.title;
            this.client
                .click(this.selector.view_all_posts_btn)
                .waitForExist(this.selector.nbr_posts, 90000)
                .pause(2000)
                .getText(this.selector.nbr_categories).then(function (value) {
					should(value).be.equal("Posts ( 4 )");
				})
                .call(done);
        });
        it('should check the number of pages in blog posts', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.nbr_pages_in_posts, 90000)
                .pause(2000)
                .getText(this.selector.nbr_pages_in_posts).then(function (number) {
                var nbr = parseInt(number);
                if(nbr != 2){
                    done(new Error("you don't have 2 pages"));
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