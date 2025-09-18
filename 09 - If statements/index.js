// IF statements = if condition is true, execute body of if
//                 else execute body of else

let age = 20;
let hasVoterId = true;

if(age >= 18 && !hasVoterId){
    console.log("Apply for voter ID");
}
else if(age >= 18){
    if(hasVoterId){
        console.log("You are eligible to vote");
    } 
}
else{
    console.log("You are NOT eligible to vote");
}