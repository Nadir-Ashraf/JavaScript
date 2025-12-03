// Goal: Create a simple calculator (+, -, *, /)



function calculate(){
    let num1 = Number(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 = Number(document.getElementById("num2").value);

    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    
    document.getElementById("result").innerHTML = `Result: ${result}`;
}



