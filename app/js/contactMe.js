var contactMe = (function () {

	//initializing modul
	var init = function () {
		_setUpListeners ();
	};
	//listen events
	var _setUpListeners = function () {
		$('#jform').on('submit', _submitForm);
	};
	
	var _submitForm = function (ev) {
		ev.preventDefault();

		var form = $(this),
		    url = 'contactme.php',
		    defObj = _ajaxForm(form, url);
	}

	var _ajaxForm = function (form, url) {
				if(!validation.validateForm(form))return false;

	};
	//return object (public method)
	return {
		init: init
	};
}) ();
contactMe.init ();