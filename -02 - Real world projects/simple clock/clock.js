function displayClock(){
    // current date and time
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    document.getElementById("clockResult").innerHTML = currentTime;
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // document.getElementById("clockResult").innerHTML = `${hour}:${minutes}:${seconds}`;
}

setInterval(displayClock, 1000);
displayClock();
