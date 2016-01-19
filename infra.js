Event.handler('Infrajs.onshow', function () {
	//Клик по контролам не должен скролить страницу
	$('.flexslider .flex-direction-nav a, .flexslider .flex-control-nav a').attr('nohref',1);
	flexslider();
});