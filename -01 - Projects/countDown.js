// Goal: create a count down timer (start from 10 seconds and reaches 0 seconds).

// let seconds = 10;

// let setIntervalId = setInterval(
//     function countDown(){
//         document.getElementById("display").innerHTML = seconds + "s";
//         seconds--;
        
//         if (seconds < 0){
//             clearInterval(setIntervalId);
//             document.getElementById("display").innerHTML = "Timeout!";
//         }
//     }, 1000);

//--------------------------------------------------------------------------------------------------------------------------------

let time = 10000;    // 10,000 milliseconds = 10s
let intervalId = setInterval(() => {
    time -= 10;

    let seconds = Math.floor(time / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    if (milliseconds < 10){
        milliseconds = "0" + milliseconds;
    }

    document.getElementById("display").innerHTML = `${seconds} : ${milliseconds} s`;

    if (time == 0){
        clearInterval(intervalId);
    }
}, 10);