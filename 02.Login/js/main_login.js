$(document).ready(function(){

	var email = $('#email-f');
	var err_email = $('#err-email');
    var err_pasword = $('#err-password');
    var password = $('#password-f');

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
});