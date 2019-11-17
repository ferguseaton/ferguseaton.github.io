$(document).ready(function(){
	console.log("The page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('on');
	});

	$('.title').hover(function(){
		$(this).toggleClass('on')
	})

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active')
		$(this).addClass('active')
	});

	var hideAll = function(){
		$('.research-item').addClass('hide')
	}

	$('.btn-playstation').click(function(){
		hideAll();
		$('.playstation').removeClass('hide')
	});

	$('.btn-pc').click(function(){
		hideAll();
		$('.pc').removeClass('hide')
	});

	$('.btn-xbox').click(function(){
		hideAll();
		$('.xbox').removeClass('hide')
	})

	$('.btn-nintendo').click(function(){
		hideAll();
		$('.nintendo').removeClass('hide')
	})

	$('.btn-mobile').click(function(){
		hideAll();
		$('.mobile').removeClass('hide')
	})

	$('.btn-nofilter').click(function(){
		hideAll();
		$('.research-item').removeClass('hide')
	})

});