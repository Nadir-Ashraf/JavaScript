// Checked property - Property that determines the checked state of an HTML 
//                    checkbox or radio button element

const subscribeBtn = document.getElementById("subscribeBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentChoice = document.getElementById("paymentChoice");

submitBtn.onclick = function(){
    if(subscribeBtn.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are Not subscribed`;
    }

    if(visaBtn.checked){
        paymentChoice.textContent = `Your payment method is visa card`;
    }
    else if(masterCardBtn.checked){ 
        paymentChoice.textContent = `Your payment method is Master card`;
    }
    else if(paypalBtn.checked){
        paymentChoice.textContent = `Your payment method is Paypal`;
    }
    else{
        paymentChoice.textContent = `Please select a payment method`;
    }
}