Event.handler('Controller.onshow', async () => {
	//Клик по контролам не должен скролить страницу
	let Load = (await import('/vendor/akiyatkin/load/Load.js')).default
	let CDN = await Load.on('import-default', '/vendor/akiyatkin/load/CDN.js')
	await CDN.load('jquery');
	$('.flexslider .flex-direction-nav a, .flexslider .flex-control-nav a').attr('nohref',1);
	flexslider();
});
