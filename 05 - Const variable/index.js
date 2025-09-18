// const = a variable that cannot be reassigned

const PI = 3.14;
let radius;


document.getElementById("submitBtn").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `Circumference: ${circumference}cm`;
}
