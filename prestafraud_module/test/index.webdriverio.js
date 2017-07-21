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

    // install and uninstall the prestasfraud module
    // require('./scenario/BO/install_and_uninstall_module.js');

    // install the prestasfraud module
    // require('./scenario/BO/install_module.js');

    // Test case n°1 = Check the default configuration
    require('./scenario/BO/configuration.webdriverio.js');
    require('./scenario/FO/buy_product.webdriverio.js')
    require('./scenario/BO/verify.webdriverio.js');

    // uninstall the prestasfraud module
    // require('./scenario/BO/uninstall_module.js');

});
