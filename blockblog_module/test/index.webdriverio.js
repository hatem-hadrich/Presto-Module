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

    // Test case n°1 = Check the existance of blocs(categories, recents posts, last comments, archives and search) in FO
    require('./scenario/FO/check_blocs.webdriverio.js');

    // Test case n°2 = Add new category in BO and check it in FO
    require('./scenario/BO/add_first_category.webdriverio');

    // Test case n°2 = Check category in FO
    require('./scenario/FO/check_category.webdriverio.js');

    // Test case n°3 = Add new post in BO and check it in FO
    require('./scenario/BO/add_first_post.webdriverio.js');
    require('./scenario/FO/check_post.webdriverio.js');

    // Test case n°4 = Add new comment to previous post in FO
    require('./scenario/FO/add_comment_to_post.webdriverio.js');
    require('./scenario/BO/enable_comment.webdriverio.js');
    require('./scenario/FO/check_comment.webdriverio.js');

    // Test case n°5 = Configure categories and posts
    require('./scenario/BO/add_second_category.webdriverio.js');
    require('./scenario/BO/add_third_category.webdriverio.js');
    require('./scenario/BO/add_fourth_category.webdriverio.js');
    require('./scenario/BO/add_second_post.webdriverio.js');
    require('./scenario/BO/add_third_post.webdriverio.js');
    require('./scenario/BO/add_fourth_post.webdriverio.js');
    require('./scenario/BO/configure_categories_posts.webdriverio.js');
    require('./scenario/FO/check_pages_categories_posts.webdriverio.js');
});
