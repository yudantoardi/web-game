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

    var $el = $(".user-pic a");
    var $ee = $(".user-dropdown");
    $el.click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".user-dropdown").toggleClass('show');
    });
    $(document).on('click',function(e){
        if(($(e.target) != $el) && ($ee.hasClass('show'))){
            $ee.removeClass('show');
        }
    });

});