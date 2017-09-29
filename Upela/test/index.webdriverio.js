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

    // Test case n°1 = Check the creation of an Upela account
   require('./scenario/BO/check_account_creation.webdriverio.js');

    // Test case n°2 = check upela account connection
   require('./scenario/BO/check_login_to_upela_account.webdriverio.js');

    // Test case n°3 = check shop creation
    require('./scenario/BO/check_shop_creation.webdriverio.js');

});
