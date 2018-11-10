$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	    //Thanh cuộn 
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();

        //croll down:
        if ($(this).scrollTop() > 350) {
            $('#list-scroll-down').fadeIn();
            $('#Scroll-down2').animate({
                left:'0',
            });
        }else {
            $('#list-scroll-down').fadeOut();
        }
    });

    $('#goTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 'slow');
    });
});