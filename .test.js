infra.wait(infrajs,'onshow',function(){
	var test=infra.test;
	test.tasks.push([
		'Проверка подключения flexlider',
		function(){
			test.check();
		},function(){
			if(!$.flexslider){
				return test.err('$.flexslider = undefined');
			}
			test.ok();
		}
	]);
	test.exec();
});