'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.email = argv.EMAIL;
global.password = argv.PWD;
global.module_tech_name = 'faviconotification';
global.module_tech_name_prestafraud = 'prestafraud';
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.my_src_image1 = "";
global.my_src_image2 = "";

// Upela Module globals
global.webserviceKey='';
global.dateTimeNumber = new Date().getTime();
global.emailUpela= 'mail' + dateTimeNumber + '@prestashop.com';



module.exports = {
    selector: {

        BO: {
            //Back office login page selector
            AccessPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },

            //Advenced Parameter page
            AdvancedParametersPage:{
                menu:'//*[@id="subtab-AdminAdvancedParameters"]/a',
                Webservice:'//*[@id="subtab-AdminWebservice"]/a',
                WebserviceOption:{
                    search_input:'//*[@id="form-webservice_account"]/div/div[2]/table/thead/tr[2]/th[3]/input',
                    search_button:'//*[@id="submitFilterButtonwebservice_account"]',
                    Upela_webservice:'//*[@id="form-webservice_account"]/div/div[2]/table/tbody/tr/td[2]'
                }
            },

            //Common selectors
            Common: {
                menu: '#nav-sidebar',
                close_validation_button: '.growl-close',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]'
            },

            //Modules page selectors
            ModulesPage: {
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',
                number_of_module_found:'//*[@id="main-div"]/div[3]/div/div/div[2]/div/div[7]/span[1]',
                configuration_button:'//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
                module_menu_button: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_button: '[class="dropdown-item module_action_menu_enable"]'
            },

            //Upela module selectorl
            UpelaModulePage:{
                production_mode_button:'//*[@id="fieldset_0"]/div[1]/div/div/span/label[1]',
                create_account_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/a[1]',
                name_input:'//*[@id="firstname"]',
                last_name_input:'//*[@id="lastname"]',
                mail_input:'//*[@id="email"]',
                mobile_number_input:'//*[@id="phone"]',
                password_input:'//*[@id="password"]',
                confirm_password_input:'//*[@id="passwordcheck"]',
                company_subtab:'//*[@id="fieldset_0"]/div[2]/ul/li[2]/a',
                professional_address_input:'//*[@id="company"]/div[2]/div/span/label[1]',
                adresse_input:'//*[@id="company_address_1"]',
                pays:'//*[@id="company_country"]',
                pays_FR:'//*[@id="company_country"]/option[75]',
                postal_code_input:'//*[@id="company_zipcode"]',
                ville_input:'//*[@id="company_city"]',
                immatriculation_input:'//*[@id="company_vat"]',
                shop_subtab:'//*[@id="fieldset_0"]/div[2]/ul/li[3]/a',
                shop_name_input:'//*[@id="store_name"]',
                shop_adresse_input:'//*[@id="store_address_1"]',
                shop_country:'//*[@id="store_country"]',
                shop_FR:'//*[@id="store_country"]/option[75]',
                shop_postale_code_input:'//*[@id="store_zipcode"]',
                shop_ville_input:'//*[@id="store_city"]',
                webservice_input:'//*[@id="webservicekey"]',
                save_shop_button:'//*[@id="configuration_form_submit_btn"]',

                shop_success_panel:'//*[@id="content"]/div[6]',
                Upela_website_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/div/a',
                connexion_subtab:'//*[@id="upelaTabs"]/li[3]/a',
                disconnect_button:'//*[@id="settings_form"]/div[1]/div/div/form/div[3]/div/div/button',
                connect_button:'//*[@id="home_form"]/div[1]/div/div/div[2]/a[2]',
                setting_subtab:'//*[@id="settings_form"]/div/div/div/form/div[3]/div[1]/div/button',
                shop_creation_button:'//*[@id="settings_form"]/div[2]/div/div/div/div/div/a',
                success_panel:'//*[@id="content"]/div[4]',
                success_created_shop:'//*[@id="content"]/div[5]',

            },

            //Module prestafraud
            //PrestaFraudModulePage
            ModulePagePrestaFraud: {
                config_module_button:'//*[@id="modules-list-container-native"]/div/div/div/div[5]/div[2]/form/button',
                create_account_button:'//*[@id="trust_account_on"]',
                agree_terms_option:'//*[@id="terms_and_conditions"]',
                shop_email_input:'//*[@id="create_account"]/form/div[1]/input',
                valid_compte_button:'/*//*[@id="submitCreateAccount"]',
                shop_id_input:'//*[@id="prestashop_trust"]/div[1]/input',
                shop_key_input:'//*[@id="prestashop_trust"]/div[2]/input',
                shop_activity_select:'//*[@id="prestashop_trust"]/div[4]/select',
                livraison_type_select:'//*[@id="prestashop_trust"]/div[5]/table/tbody/tr[1]/td[2]/select',
                module_payment_select:'//*[@id="prestashop_trust"]/div[6]/table/tbody/tr[1]/td[2]/select',
                transfer_bancaire_type_select:'//*[@id="prestashop_trust"]/div[6]/table/tbody/tr[2]/td[2]/select',
                paypal_type_select:'//*[@id="prestashop_trust"]/div[6]/table/tbody/tr[3]/td[2]/select',
                prestashop_security_save_input:'//*[@id="prestashop_trust"]/center/input',
                orders: '#subtab-AdminParentOrders',
                orders_form: '#form-order',
                first_order:'//*[@id="form-order"]/div/div[2]/table/tbody/tr[1]/td[12]/div/a',
                prestafraud_legand:'//*[@id="content"]/div[5]/div/fieldset/legend'
            }
        },

        //FO
        FO: {

            //Common selectors
            Common: {
                favicon: '/html/head/link[2]',

                desktop_login:'//*[@id="_desktop_logo"]/a',
                cookie_banner_close_button:'//*[@id="checkout"]/div/a'
            },

            //Access page selectors
            AccessPage: {
                logo_home_page: '.logo.img-responsive',
                first_product_home_page: '.thumbnail.product-thumbnail',
                
                access_loginFO:'div.user-info > a',
                loginFO_input: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                passwordFO_input: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                loginFO_button: '//*[@id="login-form"]/footer/button',
                logoutFO: '.logout'
            },

            //Product page selectors
            ProductPage: {
                add_to_cart_button: '.btn.btn-primary.add-to-cart',
                
                product_choice:'//*[@id="content"]/section[1]/div/article[1]/div/div[1]/h1/a',
                product_image: '#content',
                validate_cart_choice_button:'//*[@id="add-to-cart-or-refresh"]/div[2]/div[1]/div[2]/button',
                modal_valid_button:'//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a'
            },
            
            //Cart summary selectors
            CartSummary:{
                command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
                checkout_step2_continue_button:'//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                checkout_step4_payment: '//*[@id="payment-option-2"]',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order_button: '#payment-confirmation >div > button',
                order_confirmation_text:'#content-hook_order_confirmation > div > div > div > h3 > i'
            }
        },

        //Others
        UPELASITE:{
            title:'//*[@id="main"]/h1',
            mes_boutique_button:'//*[@id="main"]/div[2]/div[2]/div/ul/li[2]/a',
            store_subtab:'//*[@id="store_table"]/tbody/tr/td[3]/a',
            download_command_button:'//*[@id="main"]/div[2]/div[2]/div/div[2]/div[2]/a',
            succes_modal:'/html/body/div[2]/div[2]',
            success_message:'/html/body/div[2]/div[2]/div/div[2]/div/div',
            second_shop_success:'/html/body/div[2]/div[2]/div/div[1]/div/div[1]'
        }

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};