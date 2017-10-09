'use strict';
var should = require('should');
var common = require('../../common/common.webdriverio');


describe('Allscenario', function(){
	common.initMocha.call(this);
	
	before(function (done) {
		this.client = common.getClient();
		this.client.call(done);
	});
	
	after(function (done) {
		this.client
			.end()
			.call(done);
	});

    /*--> Check button of social connect in the front office*/
    // require('./scenario/FO/check_social_network_logos.webdriverio');

    /*--> Connection with Facebook */ //@TODO
    //require('./scenario/FO/connect_with_facebook.webdriverio');

    /*--> Connection with Twitter */ //OK
    // require('./scenario/BO/update_configuration_app_twitter.webdriverio');
    // require('./scenario/FO/connect_with_twitter.webdriverio');
    // require('./scenario/BO/check_customer_twitter.webdriverio');

    // /*--> Connection with Amazon */ //@TODO
    // require('./scenario/FO/connect_with_amazon.webdriverio');
    // require('./scenario/BO/check_customer_amazon.webdriverio');
    //
    // /*--> Connection with Google */ //OK
    // require('./scenario/BO/update_configuration_app_google.webdriverio');
    // require('./scenario/FO/connect_with_google.webdriverio');
    // require('./scenario/BO/check_customer_google.webdriverio');
    //
    // /*--> Connection with Pinterest */ //@TODO
    // // require('./scenario/BO/update_configuration_app_pinterest.webdriverio');
    // // require('./scenario/FO/connect_with_pinterest.webdriverio');
    // // require('./scenario/BO/check_customer_pinterest.webdriverio');
    //
    // /*--> Connection with Yahoo */ //@TODO
    // require('./scenario/FO/connect_with_yahoo.webdriverio');
    // require('./scenario/BO/check_customer_yahoo.webdriverio');
    //
    // /*--> Connection with Paypal */
    // require('./scenario/BO/update_configuration_app_paypal.webdriverio');
    // require('./scenario/FO/connect_with_paypal.webdriverio');
    // require('./scenario/BO/check_customer_paypal.webdriverio');
    //
    // /*--> Connection with Linkedin */ //OK
    // require('./scenario/BO/update_configuration_app_linkedin.webdriverio');
    // require('./scenario/FO/connect_with_linkedin.webdriverio');
    // require('./scenario/BO/check_customer_linkedin.webdriverio');
    //
    // /*--> Connection with Microsoft */ //OK
    // require('./scenario/BO/update_configuration_app_microsoft.webdriverio');
    // require('./scenario/FO/connect_with_microsoft.webdriverio');
    // require('./scenario/BO/check_customer_microsoft.webdriverio');
    //
    // /*--> Connection with Foursquare */ //OK
    require('./scenario/BO/update_configuration_app_foursquare.webdriverio');
    require('./scenario/FO/connect_with_foursquare.webdriverio');
    require('./scenario/BO/check_customer_foursquare.webdriverio');
    //
    // /*--> Connection with Github */
    // require('./scenario/BO/update_configuration_app_github.webdriverio');
    // require('./scenario/FO/connect_with_github.webdriverio');
    // require('./scenario/BO/check_customer_github.webdriverio');
    //
    // /*--> Connection with Disqus */
    // require('./scenario/BO/update_configuration_app_disqus.webdriverio');
    // require('./scenario/FO/connect_with_disqus.webdriverio');
    // require('./scenario/BO/check_customer_disqus.webdriverio');
    //
    // /*--> Connection with Dropbox */
    // require('./scenario/BO/update_configuration_app_dropbox.webdriverio');
    // require('./scenario/FO/connect_with_dropbox.webdriverio');
    // require('./scenario/BO/check_customer_dropbox.webdriverio');
    //
    // /*--> Connection with Wordpress */
    // require('./scenario/BO/update_configuration_app_wordpress.webdriverio');
    // require('./scenario/FO/connect_with_wordpress.webdriverio');
    // require('./scenario/BO/check_customer_wordpress.webdriverio');

    /*--> Connection with Tumblr */ //@TODO
    // require('./scenario/BO/update_configuration_app_tumblr.webdriverio');
    // require('./scenario/FO/connect_with_tumblr.webdriverio');
    // require('./scenario/BO/check_customer_tumblr.webdriverio');

    /*--> Connection with Vkontakte */ //@TODO
    // require('./scenario/BO/update_configuration_app_vkontakte.webdriverio');
    // require('./scenario/FO/connect_with_vkontakte.webdriverio');
    // require('./scenario/BO/check_customer_vkontakte.webdriverio');

});
