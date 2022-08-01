var $,
    dark_sign = ".content aside .bgsigns .dark",
    sun_sign = ".content aside .bgsigns .rise",
    changed_content = ".content aside, .content .arts, .content aside nav ul li, .content aside nav a, .content .arts a h2";

$(function () {
    
    'use strict';
    
    $(dark_sign).on("click", function () {
       
        $(changed_content).toggleClass("changebg");
        
        $(dark_sign).hide("fast");
        $(sun_sign).show("fast");
        
    });
    
    $(sun_sign).on("click", function () {
       
        $(changed_content).toggleClass("changebg");
        
        $(sun_sign).hide("fast");
        $(dark_sign).show("fast");
        
    });
    
    
    
    
});