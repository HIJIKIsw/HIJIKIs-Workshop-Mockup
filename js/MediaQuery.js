//--------------------------------------------------------------------------------------------------
//= MediaQuery.js
//--------------------------------------------------------------------------------------------------

	var GetMedia = function()
	{
		// content では IE で正常に取得できないためやむを得ず font-family を利用する
		return $('#MediaQuery').css('font-family').replace(/"/g, '');
	};

	var MediaIsMedium = function()
	{
		return (GetMedia() == 'Medium');
	}

	var MediaIsSmall = function()
	{
		return (GetMedia() == 'Small');
	}