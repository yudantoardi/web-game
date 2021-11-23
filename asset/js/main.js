(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function(){
    $(".burger").click(function(){
        $(".side-menu").toggleClass("show");
    });

    $(".side-header .bt-more").click(function(){
        $(".header").toggleClass("show");
    });

});