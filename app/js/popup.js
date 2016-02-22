var popup = (function () {

    //initializing modul
    var init = function () {
        _setUpListeners();
    };
    //listen events
    var _setUpListeners = function () {
        $("footer").find($(".lock")).on('click', _aOpenEvent);
        $("div").find($(".popup_a")).on('click', _aCloseEvent);
        $("ul").find($(".addproject-link")).on('click', _addProjectEvent);
        $("div").find($(".file_add_pic")).on('change', _addFileEvent);
    };
    //открываем форму логина и затемняющий фильтр
    var _aOpenEvent = function (ev) {
        ev.preventDefault();
        $("#popup1").show();
        $(".popup_a").show();
    };
    //закрываем форму логина и форму добавления проекта
    var _aCloseEvent = function (ev) {
        ev.preventDefault();
        $("#popup1").hide();
        $("#popup2").hide();

        //var form = $("#popup1").find('form');
        //if (!form.length){
        //     form = $("#popup2").find('form');
        //
        //}
        validation.clearForm($("#popup2").find('form'));
        validation.clearForm($("#popup1").find('form'));
    };
    //открываем добавления проекта
    var _addProjectEvent = function (ev) {
        ev.preventDefault();
        $("#popup2").show();
    };
    //берем имя файла и присваиваем полю инпута
    var _addFileEvent = function () {
        var realVal = $(this).val();
        var lastIndex = realVal.lastIndexOf('\\') + 1;
        if (lastIndex !== -1) {
            realVal = realVal.substr(lastIndex);
            var InputPlace = $("div").find($(".input_add_pic"));
            InputPlace.val(realVal);
        }
    };

    //return object (public method)
    return {
        init: init
    };
})();
popup.init();
