// Goal: calculate age from year
// age = current year - birth year

function calculateAge(){
    const birthYear = document.getElementById("birthYear").value;

    let dateAndTime = new Date();
    let currentYear = dateAndTime.getFullYear();

    const age = currentYear - birthYear;
    if (birthYear < 0){
        document.getElementById("result").innerHTML = `Birth Year cannot be less than 0`
    }
    else if (age < 0){
        document.getElementById("result").innerHTML = `Age cannot be negative`;
    }
    else {
        document.getElementById("result").innerHTML = `Your age is: ${age}`;
    }
};

