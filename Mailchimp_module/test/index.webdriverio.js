'use strict';
var should = require('should');
var common = require('./common.webdriverio');


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

    // install and uninstall the mailchimp module
    // require('./scenario/BO/install_and_uninstall_module.js');

    // install the mailchimp module
    // require('./scenario/BO/install_module.js');

    // Test case n°1 = Check the default configuration
    require('./scenario/BO/configuration.webdriverio.js');
    //require('./scenario/FO/buy_product.webdriverio.js')


    // uninstall the mailchimp module
    // require('./scenario/BO/uninstall_module.js');

});
