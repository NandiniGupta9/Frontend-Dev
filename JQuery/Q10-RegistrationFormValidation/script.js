$(document).ready(function(){
    $('#regForm').submit(function(e){
        e.preventDefault();
        let valid = true;
        $('#message').text('');
        $('#regForm input').removeClass('invalid');

        let name = $('#name').val();
        if(name===''){ $('#name').addClass('invalid'); valid=false; }

        let email = $('#email').val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){ $('#email').addClass('invalid'); valid=false; }

        let password = $('#password').val();
        if(password.length<8){ $('#password').addClass('invalid'); valid=false; }

        if(valid) $('#message').text('Registration Successful!').css('color','green');
        else $('#message').text('Please fix highlighted fields').css('color','red');
    });
});
