'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Check logos social network in front office', function() {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Access to the Front Office', function() {
        it('should open the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('https://' + URL)
                .call(done);
        });
    });

    //*****************************************At the top***************************************************************

    describe('Check logos social network in front office at the top of the page', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Facebook.first_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Twitter.first_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Amazon.first_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Google.first_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Pinterest.first_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.first_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Paypal.first_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Linkedin.first_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Microsoft.first_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Foursquare.first_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Github.first_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Disqus.first_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Dropbox.first_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Wordpress.first_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Tumblr.first_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Vkontakte.first_vkontakte_logo, 90000)
                .call(done);
        });

    });

    //*******************************************Near the connection button*********************************************

    describe('Check logos social network in front office near the connection button', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Facebook.second_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Twitter.second_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Amazon.second_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Google.second_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Pinterest.second_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.second_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Paypal.second_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Linkedin.second_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Microsoft.second_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Foursquare.second_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Github.second_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Disqus.second_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Dropbox.second_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Wordpress.second_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Tumblr.second_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Vkontakte.second_vkontakte_logo, 90000)
                .call(done);
        });

    });

    //*******************************************At the bottom*********************************************

    describe('Check logos social network in front office near the connection button', function () {
        it('should check FACEBOOK logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Facebook.third_facebook_logo, 90000)
                .call(done);
        });

        it('should check TWITTER logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Twitter.third_twitter_logo, 90000)
                .call(done);
        });

        it('should check AMAZON logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Amazon.third_amazon_logo, 90000)
                .call(done);
        });

        it('should check GOOGLE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Google.third_google_logo, 90000)
                .call(done);
        });

        it('should check PINTEREST logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Pinterest.third_pinterest_logo, 90000)
                .call(done);
        });

        it('should check YAHOO logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Yahoo.third_yahoo_logo, 90000)
                .call(done);
        });

        it('should check PAYPAL logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Paypal.third_paypal_logo, 90000)
                .call(done);
        });

        it('should check LINKEDIN logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Linkedin.third_linkedin_logo, 90000)
                .call(done);
        });

        it('should check MICROSOFT logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Microsoft.third_microsoft_logo, 90000)
                .call(done);
        });

        it('should check FOURSQUARE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Foursquare.third_foursquare_logo, 90000)
                .call(done);
        });

        it('should check GITHUB logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Github.third_github_logo, 90000)
                .call(done);
        });

        it('should check DISQUS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Disqus.third_disqus_logo, 90000)
                .call(done);
        });

        it('should check DROPBOX logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Dropbox.third_dropbox_logo, 90000)
                .call(done);
        });

        it('should check WORDPRESS logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Wordpress.third_wordpress_logo, 90000)
                .call(done);
        });

        it('should check TUMBLR logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Tumblr.third_tumblr_logo, 90000)
                .call(done);
        });

        it('should check VKONTAKTE logo', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.Vkontakte.third_vkontakte_logo, 90000)
                .call(done);
        });

    });
});
