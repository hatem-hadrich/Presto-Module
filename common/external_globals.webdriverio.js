'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

module.exports = {
    selector: {

        //FO
        FO: {
            //@TODO
            Facebook: {
                username_input: '//*[@id="email"]',
                password_input: '//*[@id="pass"]',
                signin_button: '//*[@id="loginbutton"]',
                app_link : '//*[@id="js_en"]/span',
                customer_api_key: '//*[@id="u_0_5t"]/div[1]/div/table/tbody/tr[1]/td[1]/div/div',
                show_secret_button: '//*[@id="u_0_5u"]/div/button',
                customer_api_secret: '//*[@id="u_0_5u"]/div/span',
                settings_menu: '//*[@id="u_0_a"]',
                site_url_input: '//*[@id="u_0_7i"]/input',
                save_button: '//button[@name="save_changes"]'
            },
            Twitter: {
                signein_button: '//*[@id="gaz-content-body"]/div[2]/div/a',
                signein_login_input : '//*[@id="page-container"]/div/div[1]/form/fieldset/div[1]/input',
                signein_password_input : '//*[@id="page-container"]/div/div[1]/form/fieldset/div[2]/input',
                signein_connect_input : '//*[@id="page-container"]/div/div[1]/form/div[2]/button',

                app_link : '//*[@id="gaz-content-body"]/div[3]/div/ul/li[1]/div/div[2]/h2/a',
                settings_tab : '//*[@id="gaz-content-body"]/div[2]/ul/li[2]/a',
                key_and_access_tokens_tab : '//*[@id="gaz-content-body"]/div[2]/ul/li[3]/a',
                website_url_input : '//*[@id="edit-url"]',
                callback_url_input : '//*[@id="edit-callback-url"]',
                update_settings_button : '//*[@id="edit-submit"]',
                customer_api_key: '//*[@id="gaz-content-body"]/div[3]/div/div[2]/div[1]/span[2]',
                customer_api_secret: '//*[@id="gaz-content-body"]/div[3]/div/div[2]/div[2]/span[2]'
            },
            //@TODO
            Amazon: {

            },
            Google: {
                username_input: '//*[@id="identifierId"]',
                identifier_next_button: '//*[@id="identifierNext"]',
                password_input: '//input[@type="password" and @name="password"]',
                password_next_button: '//*[@id="passwordNext"]',

                app_link: '//*[@id="p6n-project-table"]/tbody/tr[5]/td[2]/a',
                settings_button: '//pan-platform-bar-button[@class="p6n-console-nav-button p6n-console-nav-button-container"]/button',
                api_and_services_menu: '//a[@class="p6n-console-nav-item-link md-button md-default-theme md-ink-ripple"]',
                identifiants_submenu: '//*[@id="p6n-console-nav-section-flyout-menu-0"]/md-menu-item[3]/a',
                create_identifiant_button: '//div[@class="p6n-action-bar"]/ng-include/div/a',
                identifiant_customer_oauth_link: '//div[@class="p6n-dropdown-container"]/section/div/div/div[1]/div[2]',
                application_web_checkbox: '//fieldset[@class="p6n-form-fieldset ng-pristine ng-invalid ng-invalid-required"]/div[1]/div[1]/label[1]/span',
                authorized_javaScript_input: '/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/form/oauth-client-editor/div/section/div/fieldset[1]/div/div/ng-form/ul/li',
                click_outside_p: '.p6n-form-note',
                authorized_redirect_input: '/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/form/oauth-client-editor/div/section/div/fieldset[2]/div/div/ng-form/ul/li',
                create_button: '//div[@class="p6n-form-buttons"]/button',
                ok_button: '//a[@class="p6n-loading-button p6n-modal-action-button p6n-modal-action-container md-primary p6n-modal-actions-cancel-btn md-button md-ink-ripple"]',
                api_key: '//div[@class="md-dialog-content p6n-modal-content"]/span/ng-transclude/span',
                api_secret: '//div[@class="md-dialog-content p6n-modal-content"]/div/span/ng-transclude/span'
            },
            Pinterest: {
                username_input: '//input[@type="email" and @name="id"]',
                password_input: '//input[@type="password" and @name="password"]',
                login_button: '.red.SignupButton.active',

                app_link: '//*[@id="app"]/div/section/div/h2/a',
                app_id_input: '//*[@id="app"]/div/div[2]/header/div[2]/div/div[1]/input',
                app_secret_input: '//*[@id="app"]/div/div[2]/header/div[2]/div/div[2]/input',
                show_button: '.button.tiny',
                site_url_input: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[1]/input',
                redirect_url_input: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[2]/div/div/input',
                delete_redirect_url_icon: '//*[@id="app"]/div/div[2]/section[3]/div/div[1]/label[2]/div/ul/li/div/span[2]',
                save_button: '.small.primary.two.columns'
            },
            //@TODO
            Yahoo: {

            },
            Paypal: {
                username_input: '//*[@id="email"]',
                password_input: '//*[@id="password"]',
                login_button: '//*[@id="btnLogin"]',

                manage_api_button: '//*[@id="main"]/div/div[2]/div/a[3]',
                app_link: '//div[@class="content-wrapper"]/table/tbody/tr[2]/td[1]/a',
                log_into_dashboard_button: '//*[@id="header"]/div[2]/div[2]/span/div/a',
                show_secret_button: '//*[@id="credentialsLive-sb-view"]/div/div/div[2]/div[3]/div[2]/p',
                show_return_url_button: '//*[@id="returnUrls"]',
                customer_key: '//*[@id="credentials-sb"]',
                customer_secret: '//*[@id="c-table-sb"]/table/tbody/tr/td[2]',
                return_url_input: '//*[@id="oauth_return_url__1"]',
                log_in_with_paypal_checkbox: '//*[@id="capabilityForm"]/input',
                advanced_options_button: '//*[@id="capabilityForm"]/span/span',
                personnal_information_checkbox: '//*[@id="personalCheckBox"]',
                address_information_checkbox: '//*[@id="addressCheckBox"]',
                account_information_checkbox: '//*[@id="accountCheckBox"]',
                privacy_policy_url_input: '//*[@id="privacy_policy_url"]',
                user_agreement_url_input: '//*[@id="user_agreement_url"]',
                save_button: '//*[@id="saveBtn"]',
                feedback_button: '//*[@id="applications"]/main/div/article/div[2]/a'
            },
            Linkedin: {
                identify_button: '//*[@id="uno-reg-join"]/div/div/div/div[2]/div[1]/div/div/p/a',
                username_input: '//*[@id="session_key-login"]',
                password_input: '//*[@id="session_password-login"]',
                signin_button: '//*[@id="btn-primary"]',
                app_link: '//*[@id="app-bristol"]/div[2]/a',
                preferences_button: '//*[@id="filter-tablist"]/li[2]/a',
                website_url_input: '//*[@id="websiteUrl"]',
                update_button: '//*[@id="control_gen_1"]/form/ul[11]/li/p/button[1]',
                customer_key_span: '//*[@id="control_gen_1"]/form/ul[1]/li/table/tbody/tr[1]/td[2]/span',
                customer_secret_span: '//*[@id="control_gen_1"]/form/ul[1]/li/table/tbody/tr[3]/td[2]/span'
            },
            Microsoft: {
                username_input: '//*[@id="i0116"]',
                password_input: '//*[@id="i0118"]',
                next_button: '//*[@id="idSIButton9"]',

                app_link: '//*[@id="000000004C1DDC8F"]',
                customer_key_div: '//*[@id="main"]/div/section/form/div[1]/div[1]/div/div[4]/div[2]/div',
                customer_secret_td: '//table/tbody/tr[@class="ng-scope"]/td[1]',
                redirect_url_input: '//*[@id="replyUrl"]',
                add_profile_button: '//*[@id="UploadLogoBtn"]/div[1]/div[2]',
                cancel_button: '//*[@id="cancelbutton"]',
                save_button: '//button[@class="btn btn-primary" and @type="submit" and @name="AppSaveBtn"]'
            },
            Foursquare: {
                username_input: '//*[@id="username"]',
                password_input: '//*[@id="password"]',
                allow_button: '//*[@id="loginFormButton"]',

                app_link: '//*[@id="createdApps"]/div[1]/div/div[1]/h3/a',
                update_button: '//*[@id="developerDetails"]/div[1]/a[1]',
                application_uri_input: '//*[@id="applicationUri"]',
                privacy_policy_url_input: '//*[@id="privacyPolicyUri"]',
                redirect_url_input: '//*[@id="callbackUri"]',
                save_button: '//*[@id="appTextProperties"]/div/a',
                customer_key_pre: '//*[@id="developerDetails"]/div[1]/fieldset[1]/div[1]/div/pre/code',
                customer_secret_pre: '//*[@id="developerDetails"]/div[1]/fieldset[1]/div[2]/div/pre/code'
            },
            Github: {
                username_input: '//*[@id="login_field"]',
                password_input: '//*[@id="password"]',
                allow_button: '.btn.btn-primary.btn-block',

                app_link: '//*[@id="js-pjax-container"]/div/div[2]/div[2]/div/div/div[1]/span[1]/a',
                customer_key_dd: '//*[@id="js-pjax-container"]/div/div[2]/div[1]/div[3]/div/div/dl/dd[1]',
                customer_secret_dd: '//*[@id="js-pjax-container"]/div/div[2]/div[1]/div[3]/div/div/dl/dd[2]',
                application_url_input: '//*[@id="oauth_application_url"]',
                application_callback_url_input: '//*[@id="oauth_application_callback_url"]',
                cancel_button: '//*[@id="new_oauth_application"]/p/a',
                update_button: '//form[@class="edit_oauth_application"]/button'
            },
            Disqus: {
                username_input: '//*[@id="username-input"]',
                password_input: '//*[@id="password-input"]',
                login_button: '.button.submit',
                app_link: '//*[@id="api-account-list"]/li/h3/a',
                api_key_pre: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[2]/fieldset[2]/div[1]/pre',
                api_secret_pre: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[2]/fieldset[2]/div[2]/pre',
                settings_subtab: '//*[@id="content"]/div/div[2]/div[2]/form/div[2]/div[1]/ul/li[2]/a',
                website_input: '//*[@id="id_website"]',
                callback_input: '//*[@id="id_callback_url"]',
                terms_of_service_input: '//*[@id="id_terms_url"]',
                save_changes_button: '.button'
            },
            Dropbox: {
                username_input: '//*[@id="regular-login-forms"]/form[1]/div[1]/div[1]/div[2]/input',
                password_input: '//*[@id="regular-login-forms"]/form[1]/div[1]/div[2]/div[2]/input',
                login_button: '.login-button.button-primary',
                app_link: '//*[@id="right-content"]/div[2]/div/div[2]/div[1]/a',
                delete_redirect_uri: '//*[@id="oauth-uri-list"]/div/div/img',
                redirect_uri_input: '//*[@id="oauth-add-uri-form"]/input[3]',
                redirect_uri_add_button: '//*[@id="oauth-add-uri-form"]/input[4]',
                app_key_div: '//*[@id="config-content"]/table/tbody/tr[5]/td[2]/div',
                app_secret_div: '//*[@id="config-content"]/table/tbody/tr[6]/td[2]/div'
            },
            Wordpress: {
                username_input: '//*[@id="usernameOrEmail"]',
                password_input: '//*[@id="password"]',
                login_button: '.button.form-button.is-primary',

                app_link: '//*[@id="content"]/ul/li/div/h2/a',
                manage_settings_subtab: '//*[@id="content"]/div[2]/div[2]/ul/li[1]/a',
                customer_key_td: '//*[@id="content"]/div[3]/div[2]/table/tbody/tr[1]/td',
                customer_secret_td: '//*[@id="content"]/div[3]/div[2]/table/tbody/tr[2]/td',
                website_url_input: '//*[@id="url"]',
                redirect_uri_input: '//*[@id="redirect_uri"]',
                javascript_origins_input: '//*[@id="javascript_origins"]',
                update_button: '.button-primary'
            },
            Tumblr: {
                username_input: '//*[@id="signup_determine_email"]',
                password_input: '//*[@id="signup_password"]',
                next_button: '//*[@id="signup_forms_submit"]/span[2]',

                signin_button: '//*[@id="signup_forms_submit"]/span[6]',
                app_link: '//*[@id="dashboard_account_oauth_apps"]/div[4]/div/div/div[2]/a[2]',
                website_url_input:'//*[@id="oac_url"]',
                callback_url_input:'//*[@id="oac_default_callback_url"]',
                save_button:'//*[@id="save_button"]',
                customer_key:'//*[@id="dashboard_account_register_oauth_app"]/div[4]/div/div/span[1]',
                customer_secret:'//*[@id="secret"]',
                show_secret_button:'//*[@id="secret_toggle"]'
            },
            Vkontakte: {
                username_input: '//*[@id="email"]',
                password_input: '//*[@id="pass"]',
                signin_button: '//*[@id="login_button"]',
                my_apps_menu: '//*[@id="dev_top_apps"]',
                app_link: '//*[@id="apps_list_content"]/div/div/div[2]/div[1]/a',
                manage_button: '//*[@id="apps_list_content"]/div/div/div[4]/a',
                settings_subtab: '//*[@id="apps_nav_options"]',
                id_text: '//*[@id="app_edit_cont"]/div[2]/table[1]/tbody/tr[1]/td[2]/b',
                secret_key_input: '//*[@id="app_secret2"]',
                site_url_input: '//*[@id="app_site_url"]',
                delete_base_domain_icon: '//*[@id="apps_edit_domain_cont"]/div/div[1]/div[1]/div/a/div',
                domain_input: '//*[@id="apps_edit_domain_cont"]/div/div[1]/div[2]/input',
                save_button: '//*[@id="app_save_btn"]'
            }
        }

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};