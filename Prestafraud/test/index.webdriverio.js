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
    // Test case n°1 = Check the default configuration
     require('./scenario/BO/check_default_configuration.webdriverio.js');

	//Test case n°2 = Buy a product
	 require('./scenario/FO/buy_product.webdriverio.js');

	//Test case n°3 = Check the notification Prestafraud
	 require('./scenario/BO/check_the_notification_prestafraud.webdriverio.js');

});
