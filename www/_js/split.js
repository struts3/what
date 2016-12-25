console.log('pg loaded')
//====================================================================
function pgSplit($cont_, speed) {
	$cont_.css('height', $(document).height())

	//point to first and clone
	var $wrapC=$cont_.children()
	var $firstSl = $wrapC.eq(0)
	$firstSl.clone().insertAfter($firstSl)
	$firstSl.wrap('<div id="firstSl" class="firstSl"></div>')

	// point to 2nd and clone
	$wrapC=$cont_.children()
	var $cloneSl = $wrapC.eq(1)
	$cloneSl.wrap('<div id="cloneSl" class="cloneSl"></div>')

	//Tween =============================================================
	// set endpoints
	let haf = ($cont_.width() / 2) + 10
	let lft = '-' +haf + 'px '
	haf = ' ' +haf + 'px '

	$('#firstSl').transition({x: lft, easing: 'ease', duration: speed})
	$('#cloneSl').transition({x: haf, easing: 'ease', duration: speed})
	setTimeout(function(){ 
		console.log('remove')
		$('#firstSl').remove()
		$('#cloneSl').remove() 
	}, speed)

}//()
