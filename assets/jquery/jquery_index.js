$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(function() {
    $(".sliders").draggable({axis: "y", containment:"#slider"});


})


jQuery(window).scroll(function (){
    if($("#intro").isInViewport()){
        $("#introbtn").css({
            "background-color": "#ec8690"
        });
        $("#spelbordbtn,#charactersbtn,#videobtn").css({
            "background-color": "#b23642"
        });   
        
    }
    if($("#spelbord").isInViewport()){
        $("#spelbordbtn").css({
            "background-color": "#ec8690"
        });
        $("#introbtn,#charactersbtn,#videobtn").css({
            "background-color": "#b23642"
        });   
        
    }
    if($("#characters").isInViewport()){
        $("#charactersbtn").css({
            "background-color": "#ec8690"
        });
        $("#introbtn,#spelbordbtn,#videobtn").css({
            "background-color": "#b23642"
        });   
        
    }
     if($("#video").isInViewport()){
        $("#videobtn").css({
            "background-color": "#ec8690"
        });
        $("#introbtn,#spelbordbtn,#charactersbtn").css({
            "background-color": "#b23642"
        });   
        
    }

})