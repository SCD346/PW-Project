(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$("#theId").on('click', function(){
	    window.location = "page 2.html";    
	});
});
