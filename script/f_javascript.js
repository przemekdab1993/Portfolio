const $box = $('.box2');
const $tex_box = $('.text_box2');
const $bar = $('#move_bar');
const $hide_menu = $('.hide_menu');

function move_bar_move() {
	setTimeout( function() {
		$bar.fadeIn(500).animate({left: '130px', bottom: '34vh'}, 2000);
	}, 800);
}

function check_scrolls() {
	let $top_bar = $('#top_bar');
	let $scroll = $(document).scrollTop();
	let flag = false;
	
	if( $scroll > ($(window).height() - 60))
	{
		if( $top_bar.hasClass('mm'))
		{
			$top_bar.hide().fadeIn(1200);
			$top_bar.addClass('mn').removeClass('mm');
		}
	}
	else
	{
		$top_bar.addClass('mm').removeClass('mn');
	}
	
	const proto = [
		$('#home_container').offset().top,
		$('#about_me').offset().top - 120,
		$('#skills').offset().top - 120,
		$('#projects').offset().top - 120,
		$('#contact').offset().top - 120,
		10000 ];
	for (let i = 0; i < proto.length; i++)
	{
		if ($scroll >= proto[i] && $scroll < proto[i + 1])
		{
			$('#menu ul li a').removeClass('click_menu').eq(i).addClass('click_menu');
			break;
		}
	}
}

$(function() {
	$tex_box.hide();
	$bar.hide();
	$hide_menu.hide();
	
	move_bar_move();
	check_scrolls();
	
	$box.on('mouseover', function(e) { 
		$(this).children('.text_box2').stop().fadeIn(700);
	});
	$box.on('mouseout', function(e) { 
		$(this).children('.text_box2').stop().fadeOut(500);
	});
	
	$(document).on('scroll', function() { check_scrolls(); });
	
	
	$('#menu ul li').add('#menu_button ul li').children().on('click', function(event) {
	
		let $target = $( $(this).attr('href') );
		let $rr = $(event.target);
	
		if( $target.length ) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: $target.offset().top }, 1000);
		}
		$('#menu ul li a').removeClass('click_menu');
		$rr.not('#menu_button ul li a').addClass('click_menu');
	});
	$('#menu_button').on('click', function() {
		$hide_menu.toggle();
	});
	
	
});