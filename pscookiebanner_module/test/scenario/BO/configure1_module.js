'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
const rgbHex = require('rgb-hex');

describe('The Configuration of the Module Cookie Banner in BO ', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);


    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('Configure module', function (done) {
        it('should go to modules page', function (done) {
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.modules_search, 90000)
                    .setValue(this.selector.modules_search, global.module_tech_name)
                    .click(this.selector.modules_search_button)
                    .pause(3000)
                    .call(done);
            }
        });

        it('should click on configure button', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.module_tech_name, 90000)
                    .click(this.selector.configure_module_btn)
                    .call(done);
            }
        });

        it('Should go to the configuration step ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_step, 90000)
                .click(this.selector.configuration_step)
                .call(done)
        });

        it('Should select the banner position ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_postion_bottom, 90000)
                .click(this.selector.configuration_banner_postion_bottom)
                .call(done)
        });

        it('Should select the background-color ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_background_color_input, 90000)
                .setValue(this.selector.configuration_background_color_input, '#ff0000')
                .call(done)
        });

        it('Should enter the text ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_textarea, 90000)
                .setValue(this.selector.configuration_banner_textarea, 'To give you the best possible experience, this site uses cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.')
                .call(done)
        });

        it('Should select the text-color ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_color_text_input, 90000)
                .setValue(this.selector.configuration_color_text_input, '#000000')
                .call(done)
        });

        it('Should enter the text of link ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_link_text_input, 90000)
                .setValue(this.selector.configuration_link_text_input, 'View cookies policy configure1.')
                .call(done)
        });

        it('Should select the CMS page ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_cms_page_option3, 90000)
                .click(this.selector.configuration_banner_cms_page_option3)
                .call(done)
        });

        it('Should change the text of button in banner ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_button_accept_text_input, 90000)
                .setValue(this.selector.configuration_banner_button_accept_text_input, 'Clic here')
                .call(done)
        });

        it('Should change the background-color of button in banner ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_button_background_color_input, 90000)
                .setValue(this.selector.configuration_button_background_color_input, '#000000')
                .call(done)
        });

        it('Should change the on mouse over of button in banner ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_button_mouse_ouver_input, 90000)
                .setValue(this.selector.configuration_button_mouse_ouver_input, '#0d00f8')
                .call(done)
        });

        it('Should change the text-color of button in banner ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_button_mouse_ouver_input, 90000)
                .setValue(this.selector.configuration_button_mouse_ouver_input, '#13a000')
                .call(done)
        });

        it('Should click on <button "Save"> ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_save_btn, 90000)
                .click(this.selector.configuration_banner_save_btn)
                .call(done)
        });

        it('Should check the green bloc ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_green_validation, 90000)
                .getText(this.selector.configuration_banner_green_validation).then(function(text) {
                    should(text).be.equal(""
                        +'×\nSuccessful update !'+
                        "")
                })
                .call(done);
        });
    });

    describe('Check the preview mode of banner in BO ', function (done) {
        it('should click on enable preview mode ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_preview_mode_step, 90000)
                .click(this.selector.configuration_preview_mode_step)
                .pause(2000)
                .call(done);
        });
        it('should check the position of banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_postion_bottom, 90000)
                .getAttribute(this.selector.configuration_banner_background, 'class').then(function(classElement){
                    bannerPosition = classElement.substring(classElement.lastIndexOf("-") + 1);
                })
                .getAttribute(this.selector.configuration_banner_postion_bottom_input, 'value').then(function(position){
                    should(position).be.equal(bannerPosition);
                })
                .pause(2000)
                .call(done);
        });
        it('should check the background color of banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_background, 90000)
                .getAttribute(this.selector.configuration_banner_background, 'style').then(function(style){
                    background = '#'+(rgbHex(style.split('background-color: ').pop().split(';').shift())).substr(0,6);
                })
                .getAttribute(this.selector.configuration_background_color_input, 'value').then(function(color){
                    should(color).be.equal(background);
                })
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size, color and text value) of the text banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_text_textarea, 90000)
                .getAttribute(this.selector.configuration_text_textarea, 'style').then(function(style){
                    font = style.split('font-family: ').pop().split(';').shift();
                    textSize = style.split('font-size: ').pop().split(';').shift();
                })
                .getText(this.selector.configuration_font_text_select_option).then(function(font_text){
                    should('"'+font_text+'"').be.equal(font);
                })
                .pause(2000)
                .getAttribute(this.selector.configuration_font_size_text_input, 'value').then(function(font_size){
                    should(font_size+"px").be.equal(textSize);
                })
                .pause(2000)
                .getAttribute(this.selector.configuration_text, 'style').then(function(style){
                    colorText = '#'+(rgbHex(style.split('color: ').pop().split(';').shift())).substr(0,6);
                })
                .getAttribute(this.selector.configuration_color_text_input, 'value').then(function(colorBody){
                    should(colorBody).be.equal(colorText);
                })
                .pause(2000)
                .getText(this.selector.configuration_text_textarea).then(function (text) {
                    should(text).be.equal("To give you the best possible experience, this site uses cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.")
                })
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size and text value) of the text link banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_link, 90000)
                .getAttribute(this.selector.configuration_link, 'style').then(function(style){
                    font = style.split('font-family: ').pop().split(';').shift();
                    textSize = style.split('font-size: ').pop().split(';').shift();
                })
                .getText(this.selector.configuration_font_text_select_option).then(function(font_text){
                    should('"'+font_text+'"').be.equal(font);
                })
                .pause(2000)
                .getAttribute(this.selector.configuration_font_size_text_input, 'value').then(function(font_size){
                    should(font_size+"px").be.equal(textSize);
                })
                .pause(2000)
                .getText(this.selector.configuration_link).then(function (text) {
                    should(text).be.equal("View cookies policy configure1.")
                })
                .getAttribute(this.selector.configuration_link_href, 'href').then(function (link) {
                    cmsPage = link.split('id_cms=').pop().split('&').shift();
                })
                .getAttribute(this.selector.configuration_banner_cms_page_option3, 'value').then(function (idCms) {
                    should(idCms).be.equal(cmsPage);
                })
                .pause(2000)
                .call(done);
        });
        it('should check(Font, Size, color and text value) of the button banner in BO ', function (done) {
            this.client
                .waitForExist(this.selector.configuration_banner_button, 90000)
                .getAttribute(this.selector.configuration_banner_button, 'style').then(function(style){
                    font = style.split('font-family: ').pop().split(';').shift();
                    textSize = style.split('font-size: ').pop().split(';').shift();
                    colorText = '#'+(rgbHex(style.split('color: ').pop().split(';').shift())).substr(0,6);
                })
                .getText(this.selector.configuration_font_text_select_option).then(function(font_text){
                    should('"'+font_text+'"').be.equal(font);
                })
                .pause(2000)
                .getAttribute(this.selector.configuration_font_size_text_input, 'value').then(function(font_size){
                    should(font_size+"px").be.equal(textSize);
                })
                .pause(2000)
                .getAttribute(this.selector.configuration_button_text_color_input, 'value').then(function(linkColor){
                    should(linkColor).be.equal(colorText);
                })
                .pause(2000)
                .getText(this.selector.configuration_banner_button).then(function (text) {
                    should(text).be.equal("Clic here")
                })
                .pause(2000)
                .moveToObject(this.selector.configuration_banner_button).getAttribute(this.selector.configuration_banner_button, 'style').then(function(style){
                    background = '#'+(rgbHex(style.split('background-color: ').pop().split(';').shift())).substr(0,6);
                })
                .getAttribute(this.selector.configuration_button_mouse_ouver_input, 'value').then(function (onMouseOver) {
                    should(onMouseOver).be.equal(background);
                })
                .pause(2000)
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            this.client
                .signoutBO()
                .call(done);
        });
    });

});	