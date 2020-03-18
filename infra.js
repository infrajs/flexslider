Event.handler('Controller.onshow', async () => {
	//Клик по контролам не должен скролить страницу
	let CDN = (await import('/vendor/akiyatkin/load/CDN.js')).default
	await CDN.load('jquery');
	$('.flexslider .flex-direction-nav a, .flexslider .flex-control-nav a').attr('nohref',1);
	flexslider();
});
