'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');



describe('Add new comment to the previous post in FO', function(){
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
		
	describe('Should go to the previous post', function(done){
        it('should go to the home page ', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist(this.selector.home_logo_url, 90000)
				.click(this.selector.home_logo_url)
				.waitForExist(this.selector.posts_blog, 90000)
				.pause(2000)
			    .call(done);
		});
        it('should click on the post ', function(done){
		    global.fctname= this.test.title;
			this.client
                .click(this.selector.post_name_in_footer)
                .pause(2000)
			    .call(done);
		});
	});

	describe('Should add new comment', function(done){
        it('should enter the Name ', function(done){
		    global.fctname= this.test.title;
			this.client
			    .waitForExist('//*[@id="name-blockblog"]', 90000)
				.setValue('//*[@id="name-blockblog"]', "test")
				.pause(2000)
			    .call(done);
		});
        it('should enter the Email ', function(done){
		    global.fctname= this.test.title;
            this.client
                .waitForExist('//*[@id="email-blockblog"]', 90000)
                .setValue('//*[@id="email-blockblog"]', "test.test@test.com")
                .pause(2000)
                .call(done);
		});
        it('should enter the Comment ', function(done){
            this.client
                .waitForExist('//*[@id="comment-blockblog"]', 90000)
                .setValue('//*[@id="comment-blockblog"]', "test")
                .pause(2000)
                .call(done);
		});
        // it('should enter the Captcha-code ', function(done){
         //    // tesseracts.process('http://prestashop-dev.com/modules/blockblog/captcha.php',function(err, text) {
         //    //     if(err) {
         //    //         console.error(err);
         //    //     } else {
         //    //         console.log(text);
         //    //     }
         //    // });
         //    // Tesseract.recognize('/projet/PrestaShop/captcha.png')
         //    //     .then(function(result){console.log('result is: ', result)})
         //    // textract.fromUrl(url, function( error, text ) {console.log('result is: ', text)})
         //    this.client
         //        .waitForExist('//*[@id="captcha-blockblog"]', 90000)
         //        .setValue('//*[@id="captcha-blockblog"]', "")
         //        .pause(2000)
		// 		.click(this.selector.post_blog_comment_btn)
		// 		.pause(2000)
		// 		.waitForExist(this.selector.post_blog_comment_succes, 90000)
		// 		.getText(this.selector.post_blog_comment_succes).then(function(succes_text){
         //        	should(succes_text).be.equal("\nYour comment  has been sent successfully. Thanks for comment!")
		// 		})
         //        .call(done);
		// });

        it("should click on <button 'Comment'> ", function(done){
            this.client
				.pause(2000)
                .waitForExist(this.selector.post_blog_comment_btn, 90000)
                .click(this.selector.post_blog_comment_btn)
                .pause(2000)
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