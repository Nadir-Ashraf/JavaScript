// Goal: display current date and time

setInterval(() => {
    let dateAndTime = new Date();
    let date = dateAndTime.toLocaleDateString();
    let time = dateAndTime.toLocaleTimeString();
    
    document.getElementById("display").innerHTML = date + time;
}, 1000);