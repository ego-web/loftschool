var validation = (function () {

	//initializing modul
	var init = function () {
		_setUpListeners ();
	};
	//listen events
	var _setUpListeners = function () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _onClearForm);
        $ ("div").find ($ (".popup_a")).on('click', _onClearForm);
	};

	var _removeError = function () {
		$(this).removeClass('has-error');
	};

	var clearForm = function (form) {
		//var form = $(this);

		form.find('.has-error').removeClass('has-error');
		form.find('input, textarea').trigger('hideTooltip');
        var elements = form.find('input, textarea').not('input[type="file"],input[type="hidden"]'),
            valid =true;

/*        $.each(elements, function (index, val) {
            var element = $(val),
                value   = element.val(),
                position     = element.attr('qtip-position');
            if(value.length ===0) {
                element.addClass('has-error');
                _createQtip(element, position);
                valid = false;
            }
        });*/


    };

	var _onClearForm = function(){
		var form = $(this);
		clearForm(form);

	}


	var _createQtip = function (element, position) {
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}

		}else {
			position = {
				my:     'right center',
				at:     'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		//initializing tooltip
		element.qtip ({
			content:  {
				text:
					function () {
					return $(this).attr('qtip-content');
				}
			},
			events: {
				render: function(event, api) {
					$(window).bind('keydown', function(e) {
						if(e.keyCode === 27) {
							element.removeClass('has-error');
							element.trigger('hideTooltip');
						}
					});
				}
			},
			show:     {
				event: 'show'
			},
			hide:     {
				event: 'keydown hideTooltip'
			},
			position: position,
			style:    {
				width: 120,

				classes: 'qtip-my qtip-red ',
				tip:     {
					height: 10
				}
			}
		}).trigger ('show');
	};

	var validateForm = function (form) {

		var elements = form.find('input, textarea').not('input[type="file"],input[type="hidden"]'),
		    valid =true;

		$.each(elements, function (index, val) {
			var element = $(val),
			    value   = element.val(),
			    position     = element.attr('qtip-position');
		if(value.length ===0) {
			element.addClass('has-error');
			_createQtip(element, position);
			valid = false;
		}
		});
		return false;
	};

	//return object (public method)
	return {
		init: init,
		clearForm: clearForm,
		validateForm: validateForm
	};
})();
validation.init ();
