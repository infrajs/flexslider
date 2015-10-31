function flexslider(){
	if(!$.flexslider)return;
	$('.flexslider').not('[flexslidered]').attr('flexslidered',true).each(function(){
		var opt=$(this).data();
		$(this).flexslider(opt);
	});
}