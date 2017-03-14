$(document).ready(function(){
    
	var $w = $(window).scroll(function(){
        if($w.scrollTop() >= 100) {   
            $("nav").addClass("scroll-mode");
        }
        else {
            $("nav").removeClass("scroll-mode");
        }
        
        if($w.scrollTop() >= 2200) { 
            $("#skillbar_java").animate({width:'85%'},1500);
            $("#skillbar_py").animate({width:'80%'},1500);
            $("#skillbar_swft").animate({width:'65%'},1500);
            $("#skillbar_html").animate({width:'95%'},1500);
            $("#skillbar_css").animate({width:'85%'},1500);
            $("#skillbar_js").animate({width:'60%'},1500);
            $("#skillbar_mysql").animate({width:'75%'},1500);
            $("#skillbar_jqry").animate({width:'65%'},1500);
        }
    });
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 68
                    }, 1500);
                    return false;
                }
            }
        });
    });
    
    
});