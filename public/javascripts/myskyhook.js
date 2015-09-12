// Includes
$(function(){
  $('#footer').load("views/includes/footer.html");
  $('#modals').load("views/partials/modal.html");
  $('#formLogin').load("views/partials/login_form.html", function(){
    $('input.form-control').focus(function(){
      $(this).siblings('.glyphicon').css("color", "#000");
    });
    $('input.form-control').focusout(function(){
      $(this).siblings('.glyphicon').css("color", "inherit");
    });
  });
});

// Navbar active state
$('.nav a').click(function(){
   $('.nav').find('.active').removeClass("active");
   $(this).parent().addClass("active");
});

// Navbar auto-collapse
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})

// Hide/show login/signup form
function showLogin(){ // and hide signup
  $('#formSignup').css("display", "none");
  $('#formLogin').css("display", "block");
  $('#inputEmail, #inputPassword, #inputPasswordConfirm, #inputCompany').val('');
  checkFormFilled();
}
function showSignup(){ // and hide login
  $('#formLogin').css("display", "none");
  $('#formPassConfirm').css("display", "none");
  $('#formSignup').css("display", "block");
  $('#inputEmail, #inputPassword').val('');
}

// Check if form is filled
function checkFormFilled(){
	$('#formPassConfirm').css("display", "block");
    if($('#inputEmail').val().length !== 0){
    	$('#btnCreateAccount').prop("disabled", false);
    }else{
    	$('#btnCreateAccount').prop("disabled", true);
    }
}