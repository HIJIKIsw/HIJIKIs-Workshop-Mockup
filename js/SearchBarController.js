//--------------------------------------------------------------------------------------------------
//= SearchBarController.js
//--------------------------------------------------------------------------------------------------

	SearchBarSwitchClassName = 'SearchBarSwitched';
	SearchBarIsSwitched = false;

	var SearchBarSwitchOn = function()
	{
		SearchBarIsSwitched = true;
		$('#SearchBar').addClass(SearchBarSwitchClassName);
		$('#SearchBar > form > input').focus();
	};

	var SearchBarSwitchOff = function()
	{
		SearchBarIsSwitched = false;
		$('#SearchBar').removeClass(SearchBarSwitchClassName);
		$('#SearchBar > form > input').val('');
	};

	var SearchBarSwitchToggle = function() {
		if( SearchBarIsSwitched )
		{
			SearchBarSwitchOff();
		}
		else
		{
			SearchBarSwitchOn();
		}
	}