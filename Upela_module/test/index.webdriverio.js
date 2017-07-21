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

    // install and uninstall the paypal module
    // require('./scenario/BO/install_and_uninstall_module.js');

    // install the paypal module
    // require('./scenario/BO/install_module.js');

    // Test case n°1 = Check the creation of an Upela account
   // require('./scenario/BO/create_webservice.webdriverio.js');
    //require('./scenario/BO/create_compte_upela.webdriverio.js')


    // Test case n°2 = Configuring the Upela account with prestashop
	// require('./scenario/FO/buy_product.webdriverio');
    require('./scenario/BO/create_webservice.webdriverio.js');
    require('./scenario/BO/config_compte_upela.webdriverio.js');


    // uninstall the paypal module
    // require('./scenario/BO/uninstall_module.js');

});
