/**
 * Created by dhanyapai on 10/17/16.
 */

$(document).ready(function() {
    //$('input[type=password]').keyup(function(){
    var pwd_value = 0;
    var updateStrength = function(value) {
        console.log("CALLED WITH", value);
        var pwd_prog = document.getElementById('pwd_prog');
        pwd_prog.value = value;
        pwd_prog.getElementsByTagName('span')[0].innerHTML = value;
    }
    $('#pwd').keyup(function(){
        var pwd = $("#pwd").val();
        var username = $('#username').val();
        console.log(username);
        if( pwd===username) {
            $('#no_username').removeClass('valid').addClass('invalid');

        } else {
            $('#no_username').removeClass('invalid').addClass('valid');


        }
        if ( pwd.length < 7 || pwd.length > 20 ) {
            $('#length').removeClass('valid').addClass('invalid');
            pwd_value-=10;

        } else {
            $('#length').removeClass('invalid').addClass('valid');
            pwd_value+=10;
        }
        /**
         *
         *one of the letters (A-Z) or (a-z)
         *
         **/

        if ( pwd.match(/[A-z]{4}/) ) {
            $('#alpha').removeClass('invalid').addClass('valid');
            pwd_value+=30;
        } else {
            $('#alpha').removeClass('valid').addClass('invalid');
            pwd_value-=30;
        }
        /**
         *
         *one of the numbers
         *
         **/
        //validate number
        if ( pwd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
            pwd_value+=30;
        } else {
            $('#number').removeClass('valid').addClass('invalid');

        }

        if (pwd.match(/[^a-zA-Z\d ]+/)) {
            $('#special').removeClass('invalid').addClass('valid');
            pwd_value+=20;
        } else {
            $('#special').removeClass('valid').addClass('invalid');

        }
        if (pwd.match(/\s/)) {
            $('#no_space').removeClass('valid').addClass('invalid');

        } else {
            $('#no_space').removeClass('invalid').addClass('valid');
        }

        updateStrength(pwd_value);
    }).focus(function(){
        $('#pwd_info').show();
    }).blur(function() {
        $('#pwd_info').hide();
    });

    //Redirect the user to a thank you page on  response
    $("form").submit(function(){
        var $myForm = $('#registrationForm');
        if ($myForm[0].checkValidity()) {

            var user = {
             userName : $('#username').val(),
             password : $('#pwd').val(),
             email: $('#e_mail').val(),
             securityQ1 : $('#sec_list1').val(),
             securityA1 : $('#answer').val(),
             securityQ2 : $('#sec_list2').val(),
             securityA2 : $('#answer_confirm').val(),
             mobile : $('#mobile').val(),
             address : $('#address').val(),
             interests : $('#interests').val()
            }
            $.ajax({
                url:'/register',
                contentType:'application/json',
                type:'POST',
                data: JSON.stringify(user),
                complete:function(response) {
                    console.log(response);
                    window.location='../views/thankYou.html'
                }
            })
        }
        else {
            alert("Please correct the errors to finish registering");
        }
    });

})
var checkEmail = function() {
    var email = document.getElementById('e_mail');
    var email_confirm = document.getElementById('email_confirm');
    var message = document.getElementById('email_message')
    var correctColor = "white";
    var wrongColor = "rgba(255, 102, 102, 0.55)";

    if(email.value == email_confirm.value){
        email_confirm.style.backgroundColor = correctColor;
        message.style.color = correctColor;
        message.innerHTML = "Email Match!";
    }else{
        email_confirm.style.backgroundColor = wrongColor;
        message.style.color = wrongColor;
        message.innerHTML = "Email Addresses Do Not Match!";
    }
}
var checkPwd = function() {
    var pwd = document.getElementById('pwd');
    var pwd_confirm = document.getElementById('password_confirm')
    var message = document.getElementById('pwd_message')
    var correctColor = "white";
    var wrongColor = "rgba(255, 102, 102, 0.55)";
    console.log('checking password', pwd);

    if(pwd.value == pwd_confirm.value){
        //The passwords match.
        //Set the color to the good color and inform
        //the user that they have entered the correct password
        pwd_confirm.style.backgroundColor = correctColor;
        message.style.color = correctColor;
        message.innerHTML = "Passwords Match!";
        console.log('Match');
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pwd_confirm.style.backgroundColor = wrongColor;
        message.style.color = wrongColor;
        message.innerHTML = "Passwords Do Not Match!";
        console.log('Dont Match');
    }
}
var storeResults = function() {
    if (typeof(Storage) !== "undefined") {
        // Store
        var userid = document.getElementById('username').value;
        var pwd = document.getElementById('pwd').value;
        var securityQ = document.getElementById('security_list').value;
        var mobile = document.getElementById('mobile').value;
        var address = document.getElementById('address').value;
        var interest = document.getElementById('interests').value;
        var email = document.getElementById('e_mail').value;
        var answer = document.getElementById('answer').value;



        localStorage.setItem("userid", userid);
        localStorage.setItem("password", pwd);
        localStorage.setItem("security Q", securityQ);
        localStorage.setItem("answer", answer);
        localStorage.setItem("address", address);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("email", email);
        localStorage.setItem("interest", interest);

    }
}
var checkAndSubmit = function() {
    var $myForm = $('#registrationForm');
    if ($myForm[0].checkValidity()) {
        alert("Successfully registered");
    }
    else {
        alert("Please correct the errors to finish registering");
    }
}

