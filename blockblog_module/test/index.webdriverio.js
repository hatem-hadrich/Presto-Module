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
    require('./scenario/FO/check_blocs.webdriverio');
    //
    // Test case n°2 = Add new category in BO and check it in FO
    require('./scenario/BO/add_category.webdriverio');
    //
    // Test case n°2 = Check category in FO
    require('./scenario/FO/check_category.webdriverio');

    // Test case n°3 = Add new post in BO and check it in FO
    require('./scenario/BO/add_post.webdriverio');
    require('./scenario/FO/check_post.webdriverio');

    // Test case n°4 = Add new comment to previous post in FO
    require('./scenario/FO/add_comment_to_post.webdriverio');
    require('./scenario/BO/enable_comment.webdriverio');
    require('./scenario/FO/check_comment.webdriverio');

    // Test case n°5 = Configure categories and posts
    require('./scenario/BO/add_category1.webdriverio');
    require('./scenario/BO/add_category2.webdriverio');
    require('./scenario/BO/add_category3.webdriverio');
    require('./scenario/BO/add_post1.webdriverio');
    require('./scenario/BO/add_post2.webdriverio');
    require('./scenario/BO/add_post3.webdriverio');
    require('./scenario/BO/configure_categories_posts.webdriverio');
    require('./scenario/FO/check_pages_categories_posts.webdriverio');
});
