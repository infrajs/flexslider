<?php
$ans=array('title'=>'Необходимо установленный flexslider через bower. И подключение (не проверяется).');
if(!infra_theme('bower_components/flexslider/jquery.flexslider-min.js')){
	return infra_err($ans, 'bower_components/flexslider/jquery.flexslider-min.js не найден');
}
return infra_ret($ans, 'Дистрибутив есть');
