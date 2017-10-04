//--------------------------------------------------------------------------------------------------
//= MinimalectController.js
//--------------------------------------------------------------------------------------------------

	$(function()
	{
		$('select.CreateSelect2').each(function(){
			var Placeholder = ($(this).attr('data-placeholder') != undefined) ? $(this).attr('data-placeholder') : '';
			var WrapperWidth = ($(this).attr('data-width') != undefined) ? $(this).attr('data-width') : '';
			var DropdownWidth = ($(this).attr('data-drop-width') != undefined) ? $(this).attr('data-drop-width') : '';
			var DropdownHeight = ($(this).attr('data-drop-height') != undefined) ? $(this).attr('data-drop-height') : '';
			var AllowClear = ($(this).attr('data-reset-button') == 'true') ? true : false;
			var Select = $(this);
			Select.minimalect({
				theme: 'Material',
				reset: AllowClear,
				placeholder: Placeholder,
				empty: '該当する項目がありません。',
				afterinit: function()
				{
					var Wrapper = Select.next();
					var Dropdown = Wrapper.find('> ul');
					Wrapper.css('width', WrapperWidth);
					Dropdown.css('width', DropdownWidth);
					Dropdown.css('max-height', DropdownHeight);
				},
			});
		});
	});