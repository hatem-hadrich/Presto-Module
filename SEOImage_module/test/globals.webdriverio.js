'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id=new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

module.exports = {
    selector: {

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
		close_green_validation: '.growl-close',
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
		close_sf_toolbar:'//a[@class="hide-button"]',
        module_seo_configuration:'//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/div/li[5]/form/button',
        module_seo_configuration_btn:'//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/button',
        seo_config_panel:'//*[@id="modulecontent"]/div[1]/div[1]/a[2]',
        add_rules_btn:'//*[@id="table-metas-1"]/a[2]',
        rule_name:'//*[@id="rule_name"]',
        rule_lang_btn:'//*[@id="step-1"]/div[3]/div/div[1]/button',
        rule_lang_btn_FR:'//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[1]',
        rule_lang_btn_EN:'//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[2]',
        next_step_rules:'//*[@id="next-step"]',
        all_catalog_btn_rules:'//*[@id="radios-0"]/label/input',
        specific_catalog_btn_rules:'//*[@id="radios-1"]/label/input',
        rules_condition:'//*[@id="legend"]',
        save_rules:'//*[@id="btn-save"]',
        edit_btn_rules_step1:'//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/button',
        edit_btn_rules_step2:'//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/ul/li[1]/a',
        modal_close_btn:'/html/body/div[6]/div/div/div[1]/div/div[2]/button',
        rules_apply:'//*[@id="table-metas-1"]/tbody/tr/td[7]/div/div/a',
        categorie_check_btn:'//*[@id="category_11"]/a',
	//FO
		access_loginFO:'div.user-info > a',
		loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
		passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
		login_btnFO: '//*[@id="login-form"]/footer/button',
		logoutFO: '.logout',
		//create_account: '#email_create',
		create_account_button: '[data-link-action="display-register-form"]',
		create_account_firstname: '[name="firstname"]',
		create_account_lastname: '[name="lastname"]',
		create_account_email: '[name="email"]',
		create_account_password: '[name="password"]',
		create_account_info_validate: '[data-link-action="save-customer"]',
		logo_home_pageFO: '.logo.img-responsive',
		first_product_home_page: '//*[@id="content"]/section[1]/div[2]/div/div/article[6]/div/a',
		add_to_cart: '.btn.btn-primary.add-to-cart',
		first_product_home_page_name: '[itemprop="name"]',
		order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
		order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
		order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
		order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]',
		search_product: '.ui-autocomplete-input',
		search_product_button: '.material-icons.search',
		search_product_result_image: '.thumbnail.product-thumbnail',
		search_product_result_name: '//*[@id="js-product-list"]/div[1]/article[1]/div/div[1]/h1/a',
		search_product_result_price: '[itemprop="price"]',
		product_price_details: '[itemprop="price"]',
		close_error:'//*[@id="error-modal"]/div/div/button',
		thumbnail_image:'//*[@id="content"]/div[1]/div[2]/ul/li[1]/img',
		reference_product:'//*[@id="product-details"]/div[1]/span[2]',
		detail_product:'//*[@id="main"]/div/div[2]/div/div/ul/li[2]/a',
		expand_all_categorie:'//*[@id="expandall"]',
		evening_dress_cat:'//*[@id="category_10"]/a/i[1]',
		evening_dress:'//*[@id="exCollapsingNavbar8"]/ul/li[2]/a',
		summer_dress:'//*[@id="exCollapsingNavbar8"]/ul/li[3]/a',
		language_btn:'//*[@id="_desktop_language_selector"]/div/div/span',
		english_language:'//*[@id="_desktop_language_selector"]/div/div/ul/li[2]',
		all_product:'//*[@id="content"]/section[1]/div[1]/a',
		first_category_level:'//*[@id="exCollapsingNavbar2"]/ul/li/a',
		secand_category_level:'//*[@id="exCollapsingNavbar3"]/ul/li[2]/a',
		third_category_level:'//*[@id="exCollapsingNavbar8"]/ul/li[2]/a',
		choose_category_product:'//*[@id="js-product-list"]/div[1]/article/div/a',
		product_name_details:'//*[@id="js-product-list"]/div/article/div/div[1]/div[1]/h2/a',
        product_name_det:'//*[@id="main"]/div/div[1]/div[2]/h1',
		product_image: '#content',
		btn_appliquez_rule:'//*[@id="table-metas-1"]/tbody/tr[2]/td[7]/div/div/a',
},
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};