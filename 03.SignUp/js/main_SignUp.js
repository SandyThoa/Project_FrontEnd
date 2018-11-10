$(document).ready(function(){

	var email = $('#email-f');
	var err_email = $('#err-email');
    var err_pasword = $('#err-password');
    var password = $('#password-f');
    var re_password = $('#re-password');
   	var	err_re_password = $('#err-re-password');
   	var nut_login = $('#nut-login');
   	var name = $('#name-f');
   	var err_name = $('#err-name');

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

	email.change(function(){
		if (regex.test(email.val()) == false ) {
			err_email.html('Wrong email format');
		} else {
			err_email.html('');
		}
	});

	password.change(function(){
		if (password.val().length < 6) {
			err_pasword.html('Passwords must be 6 or more characters');
		} else {
			err_pasword.html('');
		}
	});

	re_password.change(function(){
		

		if (re_password.val().length < 6) {
			$('#err-re-password').html('Passwords must be 6 or more characters');
		} else {
			if (password.val() != re_password.val()) {
				err_pasword.html('Password was wrong');
				err_re_password.html('Password was wrong');
			} else {
				err_pasword.html('');
				err_re_password.html('');
			}
		}
		
	});

	nut_login.click(function(){
		if (email.val().length == 0) {
			err_email.html('This item can not be empty');
		}
		if (name.val().length == 0) {
			err_name.html('This item can not be empty');
		}
		if (password.val().length == 0) {
			err_password.html('This item can not be empty');
		}
		if (re_password.val().length == 0) {
			err_re_password.html('This item can not be empty');
		}
	});


});