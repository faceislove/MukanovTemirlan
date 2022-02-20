let password = document.getElementById('password');
let email = document.getElementById('email');
let repeatpassword = document.getElementById('repeat-password');


function check(){
    if (password.value === repeatpassword.value){
        alert("You have succsecfully create account!");
        window.open("signin.html");
    }
    else{

        alert("Your passwords is different!");
    }
}
