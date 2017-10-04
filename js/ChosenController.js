//--------------------------------------------------------------------------------------------------
//= ChosenController.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function()
	{
		$('.CreateChosen').each(function()
		{
			var ContainerWidth = ($(this).attr('data-width') != undefined) ? $(this).attr('data-width') : '';
			var DropdownWidth = ($(this).attr('data-drop-width') != undefined) ? $(this).attr('data-drop-width') : '';
			var DropdownHeight = ($(this).attr('data-drop-height') != undefined) ? $(this).attr('data-drop-height') : '';
			var AllowClear = ($(this).attr('data-allow-clear') == 'true') ? true : false;
			var Select = $(this);
			Select.chosen
			({
				disable_search_threshold: 10,
				allow_single_deselect: AllowClear,
				no_results_text: '該当する項目がありません。',
				search_contains: true,
				width: ContainerWidth,
				hide_results_on_select: false,
			});
			var Container = Select.next();
			var Dropdown = Container.find('> .chosen-drop');
			var DropdownResults = Dropdown.find('> .chosen-results');
			Dropdown.css('width', DropdownWidth);
			DropdownResults.css('max-height', DropdownHeight);
		});
	});