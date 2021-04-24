let username = document.getElementById("username");
let pwd = document.getElementById("pwd");

function checkPassword(){ 
    let user = /admin/;
    let pass = /12345/;

    if (user.test(username.value) && pass.test(pwd.value)) {
        home();
    }

    else{
        alert ("\nPassword or Username did not match: Please try again...")
        return false;
    }
}
function home(){
    return true;
}