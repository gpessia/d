$(document).ready(function() {
	$(".giorno").click(function() {
		$('.giorno, .momento').removeClass("attivo");
		$('.dieta-giorno').removeClass("visibile");
		$('.dieta-giorno .pasto').removeClass("invisibile");
		$(this).addClass("attivo");
		var bersaglio = $(this).attr("data-target");
		$("#"+bersaglio).addClass("visibile");
	});
	$(".momento").click(function() {
		$('.momento').removeClass("attivo");
		$('.dieta-giorno .pasto').addClass("invisibile");
		$(this).addClass("attivo");
		var bersaglio = $(this).attr("data-target");
		$("."+bersaglio).removeClass("invisibile").addClass("visibile");
	});
});