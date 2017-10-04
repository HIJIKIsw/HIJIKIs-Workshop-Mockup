//--------------------------------------------------------------------------------------------------
//= TipsoController.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function()
	{
		if( MediaIsMedium() )
		{
			$('.Tooltip').each(function()
			{
				CreateTinyTip(this, 'bottom');
			});

			$('.Tooltip-Top').each(function()
			{
				CreateTinyTip(this, 'top');
			});

			$('.Tooltip-Bottom').each(function()
			{
				CreateTinyTip(this, 'bottom');
			});

			$('.Tooltip-Left').each(function()
			{
				CreateTinyTip(this, 'left');
			});

			$('.Tooltip-Right').each(function()
			{
				CreateTinyTip(this, 'right');
			});
		}

		function CreateTinyTip(element, position)
		{
			var AddClass = "tinytip-"+position;

			// SideNav の要素は区別できるようにクラスを追加
			if( $(element).attr('data-sidenav') != undefined )
			{
				AddClass += " tinytip-sidenav";
			}

			// 特定の Tooltip は Fixed する
			if( $(element).attr('data-fixed') != undefined )
			{
				AddClass += " tinytip-fixed";
			}

			$(element).tinytip({
				position : position,
				fix : {
					top : 0,
					left: 0,
				},
				animation : {
					top : 0,
					left: 0,
				},
				speed : 300,
				tooltip : $(element).attr('data-tooltip'),
				preventClose : false,
				addClass: AddClass,
			});
		}
	});