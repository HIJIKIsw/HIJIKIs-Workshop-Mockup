//--------------------------------------------------------------------------------------------------
//= RippleEffect.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function()
	{
		$('.Ripple-White').each(function()
		{
			$(this).click(function()
			{
				SpawnRipple(this);
			});
		});

		function SpawnRipple(Parent)
		{
			var Size = Math.max($(Parent).outerWidth(), $(Parent).outerHeight());
			console.log(Size);
			var RippleEffect = $('<div class="RippleEffect"></div>').appendTo(Parent);
			RippleEffect.css({
				'width': Size,
				'height': Size,
			});

			setTimeout(function ()
			{
				$(RippleEffect).remove();
			}, 1000);
		}
	});