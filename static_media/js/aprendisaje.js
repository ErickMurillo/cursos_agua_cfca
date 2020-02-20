/*==============================================
=            Desplazamiento de tabs            =
==============================================*/
$(document).ready(function () {
	$('.scroll-to').click(function() {
		$('html, body').animate({
			scrollTop: $(".tab-content").offset().top-100
		}, 800)
	})
});

/*=====  End of Desplazamiento de tabs  ======*/
/*===============================================
=            resaltar leccion activa            =
===============================================*/
 $('.list-group-item').on('click',function(e){
	var previous = $('.list-group-item').closest(".list-group").children(".active");
	previous.removeClass('active'); // previous list-item
	$(e.target).addClass('active'); // activated list-item
  });
/*=====  End of resaltar leccion activa  ======*/

/*=========================================
=            siguiente leccion            =
=========================================*/
$('.btnNext').click(function(){
	$('.list-group > .active').next('.list-group-item').trigger('click');
});

$('.btnPrevious').click(function(){
	$('.list-group > .active').prev('.list-group-item').trigger('click');
});

$('.nextcurso').click(function(){
	var abc = $(this).attr("id");
	$("."+abc).next('').children('.panel-collapse').addClass('in').children('.panel-content').children('.list-group').children('.list-group-item').first().trigger('click');
});
$('.prevcurso').click(function(){
	var abc = $(this).attr("id");
	$("."+abc).prev('').children('.panel-collapse').addClass('in').children('.panel-content').children('.list-group').children('.list-group-item').first().trigger('click');
});
/*=====  End of siguiente leccion  ======*/


/*=============================================
=            panel y boton en movil            =
=============================================*/
$( ".side-panel-trigger" ).removeClass( "sr-only" );
// $("button").click(function(){
//     $("body").addClass("side-panel-open overflow-hidden");
// });
function closepane() {
	$("body").removeClass("side-panel-open overflow-hidden");
}
/*=====  End of panel y boton en movil  ======*/



