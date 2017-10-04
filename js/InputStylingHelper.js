//--------------------------------------------------------------------------------------------------
//= InputStylingHelper.js
//--------------------------------------------------------------------------------------------------

	$(document).ready(function()
	{
		// Selectbox
		var Selectbox = "select";
		$(Selectbox).each(function()
		{
			CheckEmpty(this);
			$(this).change(function()
			{
				CheckEmpty(this);
			});
		});

		// Textfield
		var Textfield = 'input[type=text]';
		$(Textfield).each(function()
		{
			CheckEmpty(this);
			$(this).focusout(function()
			{
				CheckEmpty(this);
			});
		});

		// Textarea
		var Textarea = "textarea";
		$(Textarea).each(function()
		{
			CheckEmpty(this)
			$(this).focusout(function(){
				CheckEmpty(this);
			});
		});


		// 入力状態をチェック
		function CheckEmpty(Element)
		{
			var Empty = '';
			var AddClassName = 'IsNotEmpty';
			if($(Element).val() != Empty){
				$(Element).addClass(AddClassName);
			}else{
				$(Element).removeClass(AddClassName);
			}
		}
	});