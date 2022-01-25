
(function ($) {
    "use strict";





    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function (e, b, c) {
        e.preventDefault();

        var btn = $('#send');
        btn.html('<div class="spinner-border text-white" role="status"><span class="sr-only">Loading...</span></div>')

        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }



        if (check) {
            var body = {
                // 'name': $('input[name=name]').val(),
                // 'email': $('input[name=email]').val(),
                'service': $('select[name=service]').val(),
                'message': $('textarea[name=message]').val(),
            }
            console.log("body", body);
            // $.ajax({
            //     url: "/core/send.php",
            //     type: "POST",
            //     data: JSON.stringify(body),
            //     dataType: "json",    
            //     contentType: 'application/json; charset=utf-8',
            //     // success: function (result) {
            //     //     $('#send').attr("disabled");
            //     // },
            //     // error: function(err){
            //     //     console.error(err);
            //     // }
            //     complete: function (xhr, status) {
            //         if (status === 'error' || !xhr.responseText) {
            //             console.log(error);
            //         }
            //         else {
            //             btn.addClass("bg-success");
            //             btn.html("Email inviata");
            //             btn.attr("disabled","disabled");
            //         }
            //     }        
            // });
            const str = 'mailto:dabrunzo.a+site@gmail.com?subject='+body.service+'&body='+body.message;
            window.open(str);
            btn.addClass("bg-success");
            btn.html('<i class="fa fa-check" aria-hidden="true"></i>');
        }



        return false;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);