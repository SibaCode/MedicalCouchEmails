$(document).ready(function () {
  $('#addEmailList').click(function (e) {
    $.ajax({
      type: 'POST',
      url: `https://medicalcouch.herokuapp.com/api/v1/email`,
      dataType: 'json',
      data: {
        email: $('#email').val(),
      },
        
      success: function (data) {
          $('#success').html(data.message)},
        error: function (data) {
          $('#success').html(data.responseJSON.message)
        },
        }); 
  });

});

