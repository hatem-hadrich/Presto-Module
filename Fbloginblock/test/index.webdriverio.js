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

    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/install_and_uninstall_module.js');
        require('./scenario/BO/install_module.js');
    }

    /*--> Check button of social connect in the front office*/
    require('./scenario/FO/check_social_network_logos.webdriverio');

    /*--> Connection with Facebook */
    //require('./scenario/FO/connect_with_facebook.webdriverio');

    /*--> Connection with Twitter */
    require('./scenario/BO/update_configuration_app_twitter.webdriverio');
    require('./scenario/FO/connect_with_twitter.webdriverio');
    require('./scenario/BO/check_customer_twitter.webdriverio');

    /*--> Connection with Amazon */
    require('./scenario/FO/connect_with_amazon.webdriverio');
    require('./scenario/BO/check_customer_amazon.webdriverio');

    /*--> Connection with Google */
    require('./scenario/BO/update_configuration_app_google.webdriverio');
    require('./scenario/FO/connect_with_google.webdriverio');
    require('./scenario/BO/check_customer_google.webdriverio');

    /*--> Connection with Pinterest */
    require('./scenario/BO/update_configuration_app_pinterest.webdriverio');
    require('./scenario/FO/connect_with_pinterest.webdriverio');
    require('./scenario/BO/check_customer_pinterest.webdriverio');

    /*--> Connection with Yahoo */
    require('./scenario/FO/connect_with_yahoo.webdriverio');
    require('./scenario/BO/check_customer_yahoo.webdriverio');

    /*--> Connection with Paypal */
    require('./scenario/BO/update_configuration_app_paypal.webdriverio');
    require('./scenario/FO/connect_with_paypal.webdriverio');
    require('./scenario/BO/check_customer_paypal.webdriverio');

    /*--> Connection with Linkedin */
    require('./scenario/BO/update_configuration_app_linkedin.webdriverio');
    require('./scenario/FO/connect_with_linkedin.webdriverio');
    require('./scenario/BO/check_customer_linkedin.webdriverio');

    /*--> Connection with Microsoft */
    require('./scenario/BO/update_configuration_app_microsoft.webdriverio');
    require('./scenario/FO/connect_with_microsoft.webdriverio');
    require('./scenario/BO/check_customer_microsoft.webdriverio');

    /*--> Connection with Foursquare */
    require('./scenario/BO/update_configuration_app_foursquare.webdriverio');
    require('./scenario/FO/connect_with_foursquare.webdriverio');
    require('./scenario/BO/check_customer_foursquare.webdriverio');

    /*--> Connection with Github */
    require('./scenario/BO/update_configuration_app_github.webdriverio');
    require('./scenario/FO/connect_with_github.webdriverio');
    require('./scenario/BO/check_customer_github.webdriverio');

    /*--> Connection with Disqus */
    require('./scenario/BO/update_configuration_app_disqus.webdriverio');
    require('./scenario/FO/connect_with_disqus.webdriverio');
    require('./scenario/BO/check_customer_disqus.webdriverio');

    /*--> Connection with Dropbox */
    require('./scenario/BO/update_configuration_app_dropbox.webdriverio');
    require('./scenario/FO/connect_with_dropbox.webdriverio');
    require('./scenario/BO/check_customer_dropbox.webdriverio');

    /*--> Connection with Wordpress */
    require('./scenario/BO/update_configuration_app_wordpress.webdriverio');
    require('./scenario/FO/connect_with_wordpress.webdriverio');
    require('./scenario/BO/check_customer_wordpress.webdriverio');

    /*--> Connection with Tumblr */
    require('./scenario/BO/update_configuration_app_tumblr.webdriverio');
    require('./scenario/FO/connect_with_tumblr.webdriverio');
    require('./scenario/BO/check_customer_tumblr.webdriverio');

    /*--> Connection with Vkontakte */
    require('./scenario/BO/update_configuration_app_vkontakte.webdriverio');
    require('./scenario/FO/connect_with_vkontakte.webdriverio');
    require('./scenario/BO/check_customer_vkontakte.webdriverio');

    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/uninstall_module.js');
    }
});
