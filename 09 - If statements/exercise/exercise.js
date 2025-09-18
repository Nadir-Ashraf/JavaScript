// User enter an age, if age is >= 18 - eligible to vote
//                    else not eligible to vote

const responsePara = document.getElementById("responsePara");

document.getElementById("submitBtn").onclick = function(){
    let userAge = document.getElementById("userAge").value;
    userAge = Number(userAge);
    console.log(userAge, typeof userAge);

    if(isNaN(userAge)){
        responsePara.textContent = "Please Enter a number";
    }
    else if(userAge < 0){
        responsePara.textContent = "Age cannot be less than 0"
    }
    else if(userAge >= 18){
        responsePara.textContent = "You are Eligible to vote";
    } 
    else {
        responsePara.textContent = "You are not eligible to vote";
    }
}

