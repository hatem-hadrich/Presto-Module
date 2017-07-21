'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
const rgbHex = require('rgb-hex');

describe('Test Case n°2 : Check the cookie banner in FO', function() {
	common.initMocha.call(this);

	before(function (done) {
		this.selector = globals.selector;
		this.client.call(done);
	});

	after(common.after);

	describe('Log in to the Front Office', function (done) {
		it('should log in successfully', function (done) {
			this.client
				.url('http://' + URL + '/en/')
				.waitForExist(this.selector.access_loginFO, 90000)
				.click(this.selector.access_loginFO)
				.waitForExist(this.selector.loginFO, 90000)
				.setValue(this.selector.loginFO, 'pub@prestashop.com')
				.setValue(this.selector.passwordFO, '123456789')
				.click(this.selector.login_btnFO)
				.pause(3000)
				.call(done);
		});
	});

    describe('Check the banner in FO ', function (done) {
        it('should check the position of banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.home_logo_url, 90000)
                .click(this.selector.home_logo_url)
				.pause(2000)
                .waitForExist(this.selector.configuration_banner, 90000)
                .getAttribute(this.selector.configuration_banner, 'class').then(function(classElement){
					var position = classElement.split('eupopup-container eupopup-container-').pop().split(' eupopup-color-default').shift();
					should(position).be.equal("bottom");
				})
                .pause(2000)
                .call(done);
        });
        it('should check the background color of banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner, 90000)
                .getAttribute(this.selector.configuration_banner, 'style').then(function(style){
					var background = '#'+(rgbHex(style.split('background-color: ').pop().split(';').shift())).substr(0,6);
					should(background).be.equal("#ff0000");
				})
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size, color and text value) of the text banner in FO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_body, 90000)
                .getAttribute(this.selector.configuration_banner_body, 'style').then(function(style){
					var fontFamily = style.split('font-family: ').pop().split(';').shift();
					var fontSize = style.split('font-size: ').pop().split(';').shift();
                	var colorTextBanner = '#'+(rgbHex(style.split('color: ').pop().split(';').shift())).substr(0,6);

                	should(fontFamily).be.equal(font);
                	should(fontSize).be.equal(textSize);
                	should(colorTextBanner).be.equal("#000000");
				})
                .getText(this.selector.configuration_banner_body).then(function(text){
					should(text).be.equal("To give you the best possible experience, this site uses cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use. View cookies policy configure1.Clic here")
				})
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size and text value) of the text link banner in FO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_body_link, 90000)
                .getAttribute(this.selector.configuration_banner_body_link, 'href').then(function(link){
					var link = link.split('content/').pop().split('-terms').shift();
					should(link).be.equal(cmsPage);
				})
                .getText(this.selector.configuration_banner_body_link).then(function(text){
					should(text).be.equal("View cookies policy configure1.");
				})
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size, color and text value) of the button banner in FO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_body_button, 90000)
                .getAttribute(this.selector.configuration_banner_body_button, 'style').then(function(style){
					var fontFamily = style.split('font-family: ').pop().split(';').shift();
					var fontSize = style.split('font-size: ').pop().split(';').shift();
					var colorTextButton = '#'+(rgbHex(style.split('color: ').pop().split(';').shift())).substr(0,6);
					var backgroundColor = '#'+(rgbHex(style.split('background-color: ').pop().split(';').shift())).substr(0,6);

                	should(fontFamily).be.equal(font);
                	should(fontSize).be.equal(textSize);
                	should(colorTextButton).be.equal(colorText);
                	should(backgroundColor).be.equal("#000000");
				})
                .pause(2000)
                .getText(this.selector.configuration_banner_body_button).then(function (text) {
					should(text).be.equal("Clic here")
				})
                .pause(2000)
                .moveToObject(this.selector.configuration_banner_body_button).getAttribute(this.selector.configuration_banner_body_button, 'style').then(function(style){
					var backgroundMouseOver = '#'+(rgbHex(style.split('background-color: ').pop().split(';').shift())).substr(0,6);
                	should(backgroundMouseOver).be.equal("#13a000");
				})
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