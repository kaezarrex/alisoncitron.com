var $; //libraries
var showContact = false;

$(function () {
	$("#contact").toggle(function () {
		$("#email").animate({
			left: $("#contact").offset().left	
		}, 500);
		showContact = true;
	}, function () {
		$("#email").animate({
			left: $(window).width()
		}, 500);
		showContact = false;
	});

	$(window).resize(function () {
		$("#email").css('left', function () {
			if (showContact) {
				return $("#contact").offset().left;	
			} else {
				return $(window).width();
			}
		});
	});

	$(window).resize();
});
