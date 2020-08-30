import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    modals();
    tabs(".glazing_slider",".glazing_link", ".glazing_content", "active");
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms();
    // tasks: 1,2, 5, 7, 10
});