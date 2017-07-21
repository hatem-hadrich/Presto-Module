'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = 'pspixel';
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.my_src_image1 = "";
global.my_src_image2 = "";
module.exports = {
    selector: {
	//Installation
	    language:'//*[@id="langList"]',
	    next_step:'//*[@id="btNext"]',
	    agree_checkbox:'//*[@id="set_license"]',
	    test_result_compatibility:'//*[@id="sheet_"]/h3',
        shop_name:'//*[@id="infosShop"]',
        country_fo:'//*[@id="infosCountry_chosen"]',
        country_france:'//*[@id="infosCountry_chosen"]/div/ul/li[2]',
        first_name:'//*[@id="infosFirstname"]',
        last_name:'//*[@id="infosName"]',
        email_address:'//*[@id="infosEmail"]',
        shop_password:'//*[@id="infosPassword"]',
        retype_password:'//*[@id="infosPasswordRepeat"]',
        database_address:'//*[@id="dbServer"]',
        database_name:'//*[@id="dbName"]',
        database_login:'//*[@id="dbLogin"]',
        database_password:'//*[@id="dbPassword"]',
        database_server_address:'//*[@id="dbServer"]',
        test_conection:'#btTestDB',
        dbResultCheck:'//*[@id="dbResultCheck"]',
        step_success:'[class:"class="process_step success"]',
        create_file_parameter_step:'//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
        create_database_step:'//li[@id="process_step_installDatabase" and @class="process_step success"]',
        create_default_shop_step:'//li[@id="process_step_installDefaultData" and @class="process_step success"]',
        create_database_table_step:'//li[@id="process_step_populateDatabase" and @class="process_step success"]',
        create_shop_informations_step:'//li[@id="process_step_configureShop" and @class="process_step success"]',
        create_demonstration_data_step:'//li[@id="process_step_installFixtures" and @class="process_step success"]',
        install_module_step:'//li[@id="process_step_installModules" and @class="process_step success"]',
        install_addons_modules_step:'//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
        install_theme_step:'//li[@id="process_step_installTheme" and @class="process_step success"]',
        finish_step:'//*[@id="install_process_success"]/div[1]/h2',



	 //BO
		login: '#email',
		password: '#passwd',
		login_btn: '[name="submitLogin"]',
		exit_welcome:'[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
		click_outside:'//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
		profil: '#employee_infos',
		new_profil: '.employee-dropdown.dropdown > div',
		logout: '#header_logout',
		products: '#subtab-AdminCatalog',
		go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
		more_option:'[class="btn btn-primary dropdown-toggle"]',
		new_product: '#page-header-desc-configuration-add',
		menu: '#nav-sidebar',
		product_name: '#form_step1_name_1',
		save_product: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
		catalog_list: '#product_catalog_list',
		//green_validation: '#main-div > div.content-div > div.row > div > div.flash-message-list.alert.alert-success > ul > li',
		//for 1.7.1.0
		green_validation: '#growls > div > div.growl-message',
		close_validation: '.growl-close',
		validation_msg: '//*[@id="growls"]/div/div[3]',
		red_validation:'#main-div > div.content-div > div > div > div.flash-message-list.alert.alert-danger > ul > li',
		summary_button: '[href="#description_short"]',
		summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
		description_button: '[href="#description"]',
		description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
		priceTE_shortcut: '#form_step1_price_shortcut',
		quantity_shortcut: '#form_step1_qty_0_shortcut',
		picture: '[class="dz-hidden-input"]',
		picture_cover: '.iscover',
		product_online: '.switch-input ',
		catalogue_filter_by_name: '//input[@name="filter_column_name"]',
		catalogue_submit_filter: '//button[@name="products_filter_submit"]',
		catalogue_filter_reset: '//button[@type="reset" and @style="display: inline-block;"]',
		orders: '#subtab-AdminParentOrders',
		orders_form: '#form-order',
		order_product_name: '.productName',
		order_quantity: '.product_quantity_show',
		order_total: '#total_order > td.amount.text-right.nowrap',
		//order_reference: '#content > div.row > div > div:nth-child(5) > div.col-lg-7 > div:nth-child(1) > div.panel-heading > span:nth-child(2)',
		order_reference: '((//div[@class="panel-heading"])[1]/span)[1]',
		modules_menu: '#subtab-AdminParentModulesSf',
		modules_search: '.pstaggerAddTagInput.module-tags-input',
		modules_search_button: '.input-group-addon.module-search-icon',
		modules_page_loaded: '.module-search-result-wording',
		modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
		modules_validate_uninstall: '//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
		nbr_module: '[class="module-sorting-search-wording"]',
		close_sf_toolbar:'//a[@class="hide-button"]',
		module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
		configure_module_btn: '//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
		configuration_step: '//*[@id="modulecontent"]/div[1]/div[1]/a[2]',
		configuration_pixel_id_input: '//*[@id="PS_PIXEL_ID"]',
		configuration_save_btn: '//*[@id="wizard"]/div[3]/div/button',
		configuration_green_validation: '//*[@id="content"]/div[4]/div[@class="module_confirmation conf confirm alert alert-success"]',


	},
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};