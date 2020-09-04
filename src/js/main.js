import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let modalState = {};
    changeModalState(modalState);


    modals();
    tabs(".glazing_slider",".glazing_link", ".glazing_content", "active");
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
    forms(modalState);

    const deadline = "2020-09-18";
    timer(".timer1",deadline);
    images();

    
    // tasks: 1,2,3,4,5,6,7,8, 10,11,12
});