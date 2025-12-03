// Goal: Check if a number is odd or even

function checkOddOrEven(){
    let num = document.getElementById("inputNumber").value;
    
    if (num === ""){
        document.getElementById("result").innerHTML = "Please Enter a number"
    }
    else if (num % 2 == 0){
        document.getElementById("result").innerHTML = `The number ${num} is Even`
    }
    else {
        document.getElementById("result").innerHTML = `The number ${num} is odd`
    }
}


