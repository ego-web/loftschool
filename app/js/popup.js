    $(document).ready(function(){
        var validation = {
            'fullName': function () {
                $('body').append('<div id="nameInfo" class="error"></div>');
                var nameInfo = $('#nameInfo');
                var elem = $('#name');
                var pos = elem.offset();
                //var cs = window.getComputedStyle(document.getElementById('name'), "");
                //alert(cs.getPropertyValue("title"));
                if (this.getAttribute('title') != 'left') {
                    nameInfo.css({
                        top: pos.top,
                        left: pos.left - elem.width()
                    });
                } else {
                    nameInfo.css({
                        top: pos.top,
                        left: pos.left + elem.width()
                    });
                }
                if (elem.val().trim() == "") {
                    validation.errors = true;
                    nameInfo.removeClass('correct').addClass('error').html('← at least 6 characters').show();
                    elem.removeClass('normal').addClass('wrong');
                } else {
                    nameInfo.removeClass('error').addClass('correct').html('√').show();
                    elem.removeClass('wrong').addClass('normal');
                }
            },

/*            'sendIt': function () {
                if (!validation.errors) {
                    $('#jform').submit();
                }
            }*/
        };
            $('#sendform').click(function (e){
                e.preventDefault();
alert( validation.fullName)

/*                var obj = $.browser ? $('body') : $('html');
            obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
                validation.errors = false;
                validation.fullName();
                validation.sendIt();
            });
            return false;*/
        });
        $('#name').change(validation.fullName);
    });

function PopUpEnterShow() {
    $("#popup1").fadeIn(600);
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").fadeOut(200);
}
