// convert the temperature to celsius or fahrenheit

const tempInput = document.getElementById("tempInput");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toCelsius.checked){
        temp = Number(tempInput.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else if(toFahrenheit.checked){
        temp = Number(tempInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else{
        result.textContent = "Please select a unit."
    }
}
