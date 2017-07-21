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

    // install and uninstall the SEOimage module
    // require('./scenario/BO/install_and_uninstall_module.js');

    // install the SEOimage module
    // require('./scenario/BO/install_module.js');

    // Test case n°1 = Add rule on all categories - FR language
        require('./scenario/BO/add_rules_FR.webdriverio');
        require('./scenario/FO/verify_rules_FR.webdriverio');


    // Test case n°2 = edit rule on all categories - FR language
        require('./scenario/BO/edit_rules_FR.webdriverio');
        require('./scenario/FO/verify_edited_rule_FR.webdriverio');


    // Test case n°3 = add rule to a specific category - EN language
        require('./scenario/BO/add_rules_EN.webdriverio');
        require('./scenario/FO/verify_rules_EN.webdriverio');

    // Test case n°4 = Add two rules and apply all rules - EN language
        require('./scenario/BO/add_apply_multi_rules_EN.webdriverio');
        require('./scenario/FO/verify_rules_list_EN.webdriverio');



    // uninstall the SEOimage module
    // require('./scenario/BO/uninstall_module.js');
});
