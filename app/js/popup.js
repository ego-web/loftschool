var popup=(function () {

	//initializing modul
	var init = function () {
		_setUpListeners ();
	};
	//listen events
	var _setUpListeners = function () {
		$("footer").find( $(".lock")).on('click', _aOpenEvent);
		$("div").find( $(".popup_a")).on('click', _aCloseEvent);
		$("ul").find( $(".addproject-link")).on('click', _addProjectEvent);
	};

	var _aOpenEvent = function (ev) {
		ev.preventDefault();
		$("#popup1").show();
		$(".popup_a").show();


	};
	var _aCloseEvent = function (ev) {
		ev.preventDefault();
		$("#popup1").hide();
		$("#popup2").hide();

	};
	var _addProjectEvent = function (ev) {
		ev.preventDefault();
		$("#popup2").show();

	};
	//return object (public method)
	return {
		init: init
	};
}) ();

popup.init ();