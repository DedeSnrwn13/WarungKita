$(document).ready(function() {

	// sticky navbar

	var height = $('.social-media').height();

	$(window).scroll(function () {
		if($(this).scrollTop() > height) {
			$('.navbar').addClass('fixed');
		} else {
			$('.navbar').removeClass('fixed')
		}
	});

	// load images
	$(function() {
	    $('.lazy').Lazy();
	    placeholder : "data:image/assets/images/loader.svg";
	});


	// slide banner

	var index = 0,
		items = $('.banner img'),
		total = items.length;

	function slide() {
		var item = $('.banner img').eq(index);
		items.hide();
		item.css('display', 'block');
	} 

	var autoslide = setInterval(function () {
		index += 1;
		if (index > total -1) {
			index = 0;
		}
		slide();
	}, 3500);

	// $('#next').click(function () {
	// 	index += 1;
	// 	if (index > total - 1) {
	// 		index = 0;
	// 	}
	// 	slide();
	// });

	// $('#prev').click(function () {
	// 	index -= 1;
	// 	if (index < 0) {
	// 		index = total - 1;
	// 	}
	// 	slide();
	// })


	// dropdown bendera

	$('.popup-trigger').click(function() {
        $('.popup-content').toggle();
    });

	//

	const hamburger = document.getElementById("sidebar");

	hamburger.addEventListener('click',()=>{
		$(".navbar-responsive").toggleClass("actived");
	});

	$('.comment').click(function(){
		$('.wrapper-comm').toggleClass("aktif")
	})
	// const img_trigger = document.



	// h('.img-hoax');
	// img_trigger.addEventListener('click',()=>{
	// 	let data = this.attr(src);
	// 	console.log(data);
	// 	$('.img-popup').addClass('active');
	// })();\


	$('.popup-img-trigger').click(function(){
		const img_source = $(this).children('img');
		let src_data = img_source.attr('src');
		console.log(src_data);
		$('.popup-backdrop').addClass('active');
		$('.popup-img').attr('src',src_data);
	});

	$('.popup-img').click(function(){
		event.stopPropagation();
	})

	$('.popup-backdrop').click(function(){
		$(this).removeClass('active');
	});

	// click

	$(".btn").click(function(e){
		$(".demo").toggleClass('active');
	})



	// btn



	// video

	$('#vid-1').click(function(e){
	  $('.popup-area').addClass('activex');
	  var data = $(this).data('url');
	  $('.vids-1').attr('src',data);
	});

	$('.close-vid').click(function(e){
	  $('.popup-area').removeClass('activex');
	  $('.vids-1').attr('src',"");
	});

	$('.popup-vid').click(function(e){
	  event.stopPropagation();
	});


	$('#vid-2').click(function(e){
	  $('.popup-area').addClass('activex');
	  var data = $(this).data('url');
	  $('.vids-1').attr('src',data);
	});

	$('#vid-3').click(function(e){
	  $('.popup-area').addClass('activex');
	  var data = $(this).data('url');
	  $('.vids-1').attr('src',data);
	});

	
});

	
