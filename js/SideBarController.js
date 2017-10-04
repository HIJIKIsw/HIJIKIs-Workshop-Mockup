//--------------------------------------------------------------------------------------------------
//= SideBarController.js
//--------------------------------------------------------------------------------------------------

	SideBarSwitchClassName = 'SideBarSwitched';
	SideBarIsSwitched = false;

	var SideBarSwitchOn = function()
	{
		SideBarIsSwitched = true;
		$('#GlobalHeader').addClass(SideBarSwitchClassName);
		$('#SiteLogo').addClass(SideBarSwitchClassName);
		$('#SideBar').addClass(SideBarSwitchClassName);
		$('#MainContainer').addClass(SideBarSwitchClassName);
		$('.tinytip-sidenav').addClass(SideBarSwitchClassName);

		if( MediaIsSmall() )
		{
			// Shade
			$('#Shade').addClass(SideBarSwitchClassName);
			$('#Shade').addClass('Active');

			// DontScroll
			var CurrentScroll = $(window).scrollTop();
			$('body').css({
				'position': 'fixed',
				'margin-top': -CurrentScroll
			});
		}
	};

	var SideBarSwitchOff = function()
	{
		SideBarIsSwitched = false;
		$('#GlobalHeader').removeClass(SideBarSwitchClassName);
		$('#SiteLogo').removeClass(SideBarSwitchClassName);
		$('#SideBar').removeClass(SideBarSwitchClassName);
		$('#MainContainer').removeClass(SideBarSwitchClassName);
		$('.tinytip-sidenav').removeClass(SideBarSwitchClassName);

		// Shade
		$('#Shade').removeClass(SideBarSwitchClassName);
		$('#Shade').removeClass('Active');

		// ReleaseScroll
		var CurrentScroll = $('body').css('margin-top').replace(/-|px/g, '');
		$('body').css({
			'position': '',
			'margin-top': ''
		});
		if( MediaIsSmall() )
		{
			$(window).scrollTop(CurrentScroll);
		}
	};

	var SideBarSwitchToggle = function() {
		if( SideBarIsSwitched )
		{
			SideBarSwitchOff();
		}
		else
		{
			SideBarSwitchOn();
		}
	}

	$('#Shade').on('click', function(e)
	{
		if( MediaIsSmall() && SideBarIsSwitched )
		{
			e.preventDefault();
			SideBarSwitchOff();
		}
	});

	$('body').on('swipeleft', function()
	{
		if( MediaIsSmall() && SideBarIsSwitched )
		{
			SideBarSwitchOff();
		}
	});