$(document).ready(function(){
	$('ul.pesta li a:first').addClass('active');
	$('.contenido2').hide();
	$('.contenido2:first').show();
	$('ul.pesta li a').click(function(){
		$('ul.pesta li a').removeClass('active',);
		$(this).addClass('active');
		$('.contenido2').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
	$('div.pie-card a').click(function(){
		$('div.pie-card a').removeClass('active');
		$('.migajas').hide();
		$('.contenido2').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});




});

