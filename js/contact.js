;(function ($) {
$(function(){
    $('#email').hide();

	$("#contact").toggle(function (event) {
        event.preventDefault();
        $('#email').show('slow');
    },function (event) {
        event.preventDefault();
        $('#email').hide('slow');
    });

});
})(jQuery);
