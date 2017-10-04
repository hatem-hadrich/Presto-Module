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
global.module_tech_name_socialConnect = 'fbloginblock';
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

            //Customer page selectors
            CustomersPage: {
                number_of_customer_found: '',
                customer_subtab: '#subtab-AdminParentCustomer',
                customer_address_email_input: '//*[@id="form-customer"]/div/div[2]/table/thead/tr[2]/th[7]/input',
                customer_search_button: '#submitFilterButtoncustomer',
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
                success_created_shop:'//*[@id="content"]/div[5]'

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
            },
            //@TODO
            Facebook: {

            },
            Twitter: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[5]/img',
                config_button: '//*[@id="navtabs16"]/li[5]/a',
                developers_link: '//*[@id="twitter"]/div/div/fieldset/div[3]/a',
                website_field_input: '//*[@id="twitter"]/div/div/fieldset/div[8]/input',
                callback_field_input: '//*[@id="twitter"]/div/div/fieldset/div[9]/input',
                customer_key_input: '//*[@id="twitterconskey"]',
                customer_secret_input: '//*[@id="twitterconssecret"]',
                save_button: '//*[@id="module_form_submit_btn_19"]'
            },
            //@TODO
            Amazon: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[6]/a',
                // developers_link: '//*[@id="twitter"]/div/div/fieldset/div[3]/a',
                // website_field_input: '//*[@id="twitter"]/div/div/fieldset/div[8]/input',
                // callback_field_input: '//*[@id="twitter"]/div/div/fieldset/div[9]/input',
                // customer_key_input: '//*[@id="twitterconskey"]',
                // customer_secret_input: '//*[@id="twitterconssecret"]',
                // save_button: '//*[@id="module_form_submit_btn_19"]',
            },
            Google: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[7]/a',
                authorized_javaScript_origins_input: '//*[@id="google"]/div/div/fieldset/div[21]/input',
                authorized_redirect_uri_input: '//*[@id="google"]/div/div/fieldset/div[22]/input',
                developers_link: '//*[@id="google"]/div/div/fieldset/div[9]/a',
                customer_key_input: '//*[@id="oci"]',
                customer_secret_input: '//*[@id="ocs"]',
                save_button: '//*[@id="module_form_submit_btn_21"]',
            },
            Pinterest: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[18]/a',
                developers_link: '//*[@id="pinterest"]/div/div/fieldset/div[3]/a',
                site_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[8]/input',
                redirect_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[9]/input',
                customer_key_input: '//*[@id="pici"]',
                customer_secret_input: '//*[@id="pics"]',
                save_button: '//*[@id="module_form_submit_btn_32"]',
            },
            Yahoo: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
            },
            Paypal: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[9]/a',
                return_url_input: '//*[@id="paypal"]/div/div/fieldset/div[8]/input',
                privacy_policy_url_input: '//*[@id="paypal"]/div/div/fieldset/div[11]/input',
                user_agreement_url_input: '//*[@id="paypal"]/div/div/fieldset/div[12]/input',
                developers_link: '//*[@id="paypal"]/div/div/fieldset/div[3]/a',
                log_inti_dashboard_button: '//*[@id="header"]/div[2]/div[2]/span/div/a',
                customer_key_input: '//*[@id="clientid"]',
                customer_secret_input: '//*[@id="psecret"]',
                save_button: '//*[@id="module_form_submit_btn_23"]',
            },
            Linkedin: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[10]/a',
                website_url_input: '//*[@id="linkedin"]/div/div/fieldset/div[11]/input',
                developers_link: '//*[@id="linkedin"]/div/div/fieldset/div[3]/a',
                customer_key_input: '//*[@id="lapikey"]',
                customer_secret_input: '//*[@id="lsecret"]',
                save_button: '//*[@id="module_form_submit_btn_24"]',
            },
            Microsoft: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[11]/a',
                redirect_url_input: '//*[@id="hotmail"]/div/div/fieldset/div[8]/input',
                developers_link: '//*[@id="hotmail"]/div/div/fieldset/div[3]/a',
                customer_key_input: '//*[@id="mclientid"]',
                customer_secret_input: '//*[@id="mclientsecret"]',
                save_button: '//*[@id="module_form_submit_btn_25"]',
            },
            Foursquare: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[12]/a',
                redirect_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[9]/input',
                welcome_page_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[7]/input',
                privacy_policy_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[8]/input',
                developers_link: '//*[@id="foursquare"]/div/div/fieldset/div[3]/a',
                customer_key_input: '//*[@id="fsci"]',
                customer_secret_input: '//*[@id="fscs"]',
                save_button: '//*[@id="module_form_submit_btn_26"]',
            },
            Github: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[13]/a',
                developers_link: '//*[@id="github"]/div/div/fieldset/div[3]/a',
                home_page_url_input: '//*[@id="github"]/div/div/fieldset/div[5]/input',
                callback_url_input: '//*[@id="github"]/div/div/fieldset/div[7]/input',
                customer_key_input: '//*[@id="gici"]',
                customer_secret_input: '//*[@id="gics"]',
                save_button: '//*[@id="module_form_submit_btn_27"]',
            },
            Disqus: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[14]/a',
                developers_link: '//*[@id="disqus"]/div/div/fieldset/div[3]/a',
                website_url_input: '//*[@id="disqus"]/div/div/fieldset/div[8]/input',
                callback_url_input: '//*[@id="disqus"]/div/div/fieldset/div[12]/input',
                terms_of_service_url_input: '//*[@id="disqus"]/div/div/fieldset/div[16]/input',
                api_key_input: '//*[@id="dci"]',
                api_secret_input: '//*[@id="dcs"]',
                save_button: '//*[@id="module_form_submit_btn_28"]',
            },
            Dropbox: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[15]/a',
                redirect_uri_input: '//*[@id="dropbox"]/div/div/fieldset/div[10]/input',
                developers_link: '//*[@id="dropbox"]/div/div/fieldset/div[3]/a',
                api_key_input: '//*[@id="dbci"]',
                api_secret_input: '//*[@id="dbcs"]',
                save_button: '//*[@id="module_form_submit_btn_29"]',
            },
            Wordpress: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[16]/a',
                developers_link: '//*[@id="wordpress"]/div/div/fieldset/div[3]/a',
                website_url_input: '//*[@id="wordpress"]/div/div/fieldset/div[7]/input',
                redirect_uri_input: '//*[@id="wordpress"]/div/div/fieldset/div[8]/input',
                javascript_origins_input: '//*[@id="wordpress"]/div/div/fieldset/div[9]/input',
                customer_key_input: '//*[@id="wci"]',
                customer_secret_input: '//*[@id="wcs"]',
                save_button: '//*[@id="module_form_submit_btn_30"]',
            },
            Tumblr: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[17]/a',
                developers_link: '//*[@id="tumblr"]/div/div/fieldset/div[3]/a',
                website_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[6]/input',
                callback_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[8]/input',
                customer_key_input: '//*[@id="tuci"]',
                customer_secret_input: '//*[@id="tucs"]',
                save_button: '//*[@id="module_form_submit_btn_31"]',
            },
            Vkontakte: {
                logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                config_button: '//*[@id="navtabs16"]/li[19]/a',
                developers_link: '//*[@id="vkontakte"]/div/div/fieldset/div[3]/a',
                site_address_input: '//*[@id="vkontakte"]/div/div/fieldset/div[6]/input',
                customer_key_input: '//*[@id="vci"]',
                customer_secret_input: '//*[@id="vcs"]',
                save_button: '//*[@id="module_form_submit_btn_33"]',
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
                first_product_home_page_name: '[itemprop="name"]',

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
                modal_valid_button:'//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',

                product_name_details: '[itemprop="name"]',
                product_price_details: '[itemprop="price"]',
                product_quantity_details: '#quantity_wanted',
                layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
                layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
                layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
                layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
                layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
                command_product_name: '(//div[@class="product-line-info"])[1]/a',
                command_product_price: '//span[@class="price"]',
                command_checkout_button: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
                checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
                // checkout_step2_continue_button: '//*[@id="delivery-address"]/div/footer/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                checkout_step4_payment: '//*[@id="payment-option-2"]',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order: '#payment-confirmation >div > button',
                checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
                order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
                order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
                order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
                order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]'
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
            },

            Facebook: {
                first_facebook_logo: '#follow-teaser > div > a.facebook.custom-social-button-all.custom-social-button-1 > i',
                second_facebook_logo: '#_desktop_user_info > div > span > a.facebook.custom-social-button-all.custom-social-button-4 > i',
                third_facebook_logo: '#follow-teaser-footer > div > a.facebook.custom-social-button-all.custom-social-button-1 > i'
            },
            Twitter: {
                first_twitter_logo: '#follow-teaser > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',
                second_twitter_logo: '#_desktop_user_info > div > span > a.twitter.custom-social-button-all.custom-social-button-4 > i',
                third_twitter_logo: '#follow-teaser-footer > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="username_or_email"]',
                password_input: '//*[@id="password"]',
                allow_button: '//*[@id="allow"]',
                linked_modale: '#fb-con-wrapper',
                email_input: '//*[@id="api-email"]',
                send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                check_sent_email_p: '//*[@id="fb-con-wrapper"]/p',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Amazon: {
                first_amazon_logo: '#follow-teaser > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',
                second_amazon_logo: '#_desktop_user_info > div > span > a.amazon.custom-social-button-all.custom-social-button-4 > i',
                third_amazon_logo: '#follow-teaser-footer > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="ap_email"]',
                password_input: '//*[@id="ap_password"]',
                signin_button: '//*[@id="signInSubmit"]/span/button',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Google: {
                first_google_logo: '#follow-teaser > div > a.google.custom-social-button-all.custom-social-button-1 > i',
                second_google_logo: '#_desktop_user_info > div > span > a.google.custom-social-button-all.custom-social-button-4 > i',
                third_google_logo: '#follow-teaser-footer > div > a.google.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="identifierId"]',
                identifier_next_button: '//*[@id="identifierNext"]',
                password_input: '//input[@type="password" and @name="password"]',
                password_next_button: '//*[@id="passwordNext"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Pinterest: {
                first_pinterest_logo: '#follow-teaser > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',
                second_pinterest_logo: '#_desktop_user_info > div > span > a.pinterest.custom-social-button-all.custom-social-button-4 > i',
                third_pinterest_logo: '#follow-teaser-footer > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//input[@type="email" and @name="id"]',
                password_input: '//input[@type="password" and @name="password"]',
                login_button: '.red.SignupButton.active',
                allow_button: '//*[@id="dialog_footer"]/button[2]',
                linked_email_input: '//*[@id="api-email"]',
                send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                check_sent_email_p: '//*[@id="fb-con-wrapper"]/p',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Yahoo: {
                first_yahoo_logo: '#follow-teaser > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',
                second_yahoo_logo: '#_desktop_user_info > div > span > a.yahoo.custom-social-button-all.custom-social-button-4 > i',
                third_yahoo_logo: '#follow-teaser-footer > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="login-username"]',
                password_input: '//*[@id="login-passwd"]',
                next_button: '//*[@id="login-signin"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Paypal: {
                first_paypal_logo: '#follow-teaser > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',
                second_paypal_logo: '#_desktop_user_info > div > span > a.paypal.custom-social-button-all.custom-social-button-4 > i',
                third_paypal_logo: '#follow-teaser-footer > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="email"]',
                password_input: '//*[@id="password"]',
                login_button: '//*[@id="btnLogin"]',
                allow_button: '//*[@id="agreeConsent"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Linkedin: {
                first_linkedin_logo: '#follow-teaser > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',
                second_linkedin_logo: '#_desktop_user_info > div > span > a.linkedin.custom-social-button-all.custom-social-button-4 > i',
                third_linkedin_logo: '#follow-teaser-footer > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="session_key-oauthAuthorizeForm"]',
                password_input: '//*[@id="session_password-oauthAuthorizeForm"]',
                allow_button: '.allow.btn-primary',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Microsoft: {
                first_microsoft_logo: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',
                second_microsoft_logo: '#_desktop_user_info > div > span > a.microsoft.custom-social-button-all.custom-social-button-4 > i',
                third_microsoft_logo: '#follow-teaser-footer > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="i0116"]',
                password_input: '//*[@id="i0118"]',
                next_button: '//*[@id="idSIButton9"]',
                accept_button: '//*[@id="idBtn_Accept"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Foursquare: {
                first_foursquare_logo: '#follow-teaser > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',
                second_foursquare_logo: '#_desktop_user_info > div > span > a.foursquare.custom-social-button-all.custom-social-button-4 > i',
                third_foursquare_logo: '#follow-teaser-footer > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="username"]',
                password_input: '//*[@id="password"]',
                allow_button: '//*[@id="loginFormButton"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Github: {
                first_github_logo: '#follow-teaser > div > a.github.custom-social-button-all.custom-social-button-1 > i',
                second_github_logo: '#_desktop_user_info > div > span > a.github.custom-social-button-all.custom-social-button-4 > i',
                third_github_logo: '#follow-teaser-footer > div > a.github.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="login_field"]',
                password_input: '//*[@id="password"]',
                allow_button: '.btn.btn-primary.btn-block',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Disqus: {
                first_disqus_logo: '#follow-teaser > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',
                second_disqus_logo: '#_desktop_user_info > div > span > a.disqus.custom-social-button-all.custom-social-button-4 > i',
                third_disqus_logo: '#follow-teaser-footer > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="username"]',
                password_input: '//*[@id="password"]',
                allow_button: '.btn',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Dropbox: {
                first_dropbox_logo: '#follow-teaser > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',
                second_dropbox_logo: '#_desktop_user_info > div > span > a.dropbox.custom-social-button-all.custom-social-button-4 > i',
                third_dropbox_logo: '#follow-teaser-footer > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[1]/div[2]/input',
                password_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[2]/div[2]/input',
                login_button: '.login-button.signin-button.button-primary',
                allow_button: '.auth-button.button-primary',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Wordpress: {
                first_wordpress_logo: '#follow-teaser > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',
                second_wordpress_logo: '#_desktop_user_info > div > span > a.wordpress.custom-social-button-all.custom-social-button-4 > i',
                third_wordpress_logo: '#follow-teaser-footer > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="usernameOrEmail"]',
                password_input: '//*[@id="password"]',
                login_button: '.button.form-button.is-primary',
                allow_button: '//*[@id="approve"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Tumblr: {
                first_tumblr_logo: '#follow-teaser > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',
                second_tumblr_logo: '#_desktop_user_info > div > span > a.tumblr.custom-social-button-all.custom-social-button-4 > i',
                third_tumblr_logo: '#follow-teaser-footer > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="signup_determine_email"]',
                password_input: '//*[@id="signup_password"]',
                next_button: '//*[@id="signup_forms_submit"]/span[2]',
                allow_button: '//*[@id="approve"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
            },
            Vkontakte: {
                first_vkontakte_logo: '#follow-teaser > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',
                second_vkontakte_logo: '#_desktop_user_info > div > span > a.vkontakte.custom-social-button-all.custom-social-button-4 > i',
                third_vkontakte_logo: '#follow-teaser-footer > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',

                username_input: '//*[@id="login_submit"]/div/div/input[6]',
                password_input: '//*[@id="login_submit"]/div/div/input[7]',
                login_button: '//*[@id="install_allow"]',
                user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
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