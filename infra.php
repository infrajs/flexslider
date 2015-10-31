<?php
namespace itlife\flexslider;
global $infra;
infra_when($infra,'onjs', function () {
	global $infra;
	$infra['js'] .= $infra['require']('*flexslider/flexslider.js');
	$infra['js'] .= $infra['require']('*flexslider/infra.js');
});