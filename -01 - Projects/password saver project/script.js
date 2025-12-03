// This is a password saver, meaning a place where you can save your passwords

function savePassword(){
    let siteName = document.getElementById("siteName").value;
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let result = `${siteName} - ${userName} - ${password}`;
    document.getElementById("result").innerHTML = result;
}