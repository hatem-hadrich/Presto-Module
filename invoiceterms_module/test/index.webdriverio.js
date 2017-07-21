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

    // install and uninstall the invoiceterms module
   // require('./scenario/BO/install_and_uninstall_module.js');

    // install the invoiceterms module
   // require('./scenario/BO/install_module.js');

    // Test case n°1 = Check the default configuration
	 //require('./scenario/FO/buy_product.webdriverio');
	 //require('./scenario/BO/default_configuration.webdriverio');


    // Test case n°2 = Check the added configuration
	  require('./scenario/FO/buy_product.webdriverio');
	  require('./scenario/BO/invoiceterms_default.webdriverio');

    // Test case n°3 = Modify terms and conditions of use
      require('./scenario/FO/buy_product.webdriverio');
	  require('./scenario/BO/edit_invoiceterms.webdriverio');

      require('./scenario/FO/buy_product.webdriverio');
	  require('./scenario/BO/check_edited_invoiceterms.webdriverio');

    // uninstall the invoiceterms module
    // require('./scenario/BO/uninstall_module.js');

});
