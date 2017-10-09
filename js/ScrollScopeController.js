//--------------------------------------------------------------------------------------------------
//= ScrollScopeController.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function(){
		var AttrName = 'data-scroll-scope';

		$('.minict_wrapper > ul').attr(AttrName, '');

		$(this).scrollScope({
			elements: '['+AttrName+']',
		});
	})