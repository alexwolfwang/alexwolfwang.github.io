/**
 * Created by Alex.W on 2016/7/15.
 */

    $('.cancel').click(function() {
        $('input').val('');
        $('textarea').val('');
        $('#request_modal').on('hidden.bs.modal',function() {
            location.reload();
        })
    });

    $('.close').click(function() {
        $('input').val('');
        $('textarea').val('');
        $('#request_modal').on('hidden.bs.modal',function() {
            location.reload();
        })
    });


$(function() {

        $("#request_form input, #request_form textarea").jqBootstrapValidation({
            preventSubmit:true,


            submitSuccess:function($form, event){
                // Prevent spam click and default submit behaviour
                $(".btnSend").attr("disabled", true);
                event.preventDefault();

                var name = $('input.name').val().trim();
                var email = $('input.email').val();
                var msg = $('textarea.msg').val();
                var Name = name;
                var resumeRequest = $('#request_label')[0].checked;


                if(Name.indexOf(' ') >= 0) {
                    Name = Name.split(' ').slice(0).join(' ');
                }


                emailjs.send('mengyao','contact_msg',{"Name":Name,"email":email,"message":msg,"resume":resumeRequest}).then(function(response) {
                    //msg send successful

                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    $('#btnSend').attr('disabled',false);
                    $('#success_reply').html("<div class='alert alert-success'>");
                    $('#success_reply > .alert-success').html("<strong>Thank you "+ Name +", your message has been sent</strong>").append("</div>");

                    $('#request_form').each(function() {

                        $('input').val('');
                        $('textarea').val('');
                    })
                },function(err) {
                    //msg send failure
                    console.log("FAILED. error=",err);
                    $('#btnSend').attr('disabled',true);
                    $('#success_reply').html("<div class='alert alert-danger'>");
                    $('#success_reply > .alert-danger').html("<strong><i class='fa fa-frown-o fa-2x'></i> Sorry " + Name +", the server is not responing. </strong>");
                    $('#success_reply > .alert-danger').append("<br>");
                    $('#success_reply > .alert-danger').append("<strong>Please try again later~~</strong>");
                    $('#success_reply > .alert-danger').append("</div>")
                })
            }
        });
    //})
});

$(function() {
    $(".message input, .message textarea").jqBootstrapValidation( {
        preventSubmit: true,

        submitSuccess: function($form, event) {
            $(".msg_send").attr("disabled",true);
            event.preventDefault();

            var name = $('input.msgName').val().trim();
            var email = $("input.msgEmail").val();
            var msg = $('textarea.msgMessage').val();
            var Name = name;
            var resumeRequest = $('#request_label2')[0].checked;

            if(Name.indexOf(' ') >= 0) {
                Name = Name.split(' ').splice(0).join(' ');
            }

            emailjs.send('mengyao','contact_msg',{'Name':Name,'email':email, 'message':msg, 'resume':resumeRequest}).then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                $('.msg_send').attr("disabled",false);
                $('.msg_reply').html("<div class='alert alert-success'>");
                $(".msg_reply > .alert-success").html("<strong>Thank you "+ Name +", your message has been sent</strong>");

                $(".message").each(function() {
                    $('input').val('');
                    $('textarea').val('');
                })
            },function(err) {
                console.log("FAILED. error=",err);
                $('.msg_reply').attr('disabled',true);
                $('.msg_reply').html("<div class='alert alert-danger'>");
                $('.msg_reply > .alert-danger').html("<strong><i class='fa fa-frown-o fa-2x'></i> Sorry " + Name +", the server is not responing. </strong>");
                $('.msg_reply > .alert-danger').append("<br>");
                $('#success_reply > .alert-danger').append("<strong>Please try again later~~</strong>");
                $('#success_reply > .alert-danger').append("</div>")
            })
        }
    })
})