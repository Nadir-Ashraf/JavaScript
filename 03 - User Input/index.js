// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

// window prompt
// let userName;
// userName = window.prompt("Enter username");
// console.log(`Welcome ${userName}`);

// HTML textbox
let userName;

document.getElementById("submitBtn").onclick = function(){
    userName = document.getElementById("userName").value;
    console.log(`Welcome ${userName}`);
    document.getElementById("welcomeId").textContent = `Welcome ${userName}`;
}