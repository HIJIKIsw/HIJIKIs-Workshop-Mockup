//--------------------------------------------------------------------------------------------------
//= ScrollScopeController.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function(){
		var AttrName = 'data-scroll-scope';

		$('#SideBar').attr(AttrName, '');
		$('.minict_wrapper > ul').attr(AttrName, '');
		$(this).scrollScope({
			elements: '['+AttrName+']',
		});
	})