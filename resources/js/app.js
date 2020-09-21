$(document).ready(function(){
	// hide popup akun
  	$(".account").click(function(){
	    $(".popup-account").slideToggle();
	});

	// hide popup bahasa
  	$(".lang").click(function(){
	    $(".popup-lang").slideToggle(250);
	});

	// hide popup notifikasi
  	$(".notif").click(function(){
	    $(".popup-notif").slideToggle(250);
	});

	// hide popup notifikasi
  	$(".chat").click(function(){
	    $(".popup-chat").slideToggle(250);
	});

	// hide popup cart
  	$(".cart").click(function(){
	    $(".popup-cart").slideToggle(250);
	});

    // slick toko banner
    $('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        autoplay: true,
		autoplaySpeed: 2300,
		prevArrow: '<img src="assets/images/toko/Before.png" class="slick-prev"  alt="Prev Images">',
		nextArrow: '<img src="assets/images/toko/Next.png" class="slick-next" alt="Next Images">',
    });
});




	


	
