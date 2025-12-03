const students = [
    {name: "Nadir", age: 20, marks: 100},
    {name: "Amaan", age: 20, marks: 180},
    {name: "Irfan", age: 22, marks: 190},
];

console.log(students[0].name);
console.log(typeof students);

console.log(students.length);

const averageMarks = avgMarks();
function avgMarks(){
    let totalMarks = 0;
    for(let i = 0; i < students.length; i++){
        totalMarks += students[i].marks;
    }
    return totalMarks / students.length;    // calculating average marks
}
console.log("Average marks: " + averageMarks);

// finding top scorer
function topScorer(){
    let topper = students[0];
    for(let i = 1; i < students.length; i++){
        if(students[i].marks > topper.marks){
            topper = students[i];
        }
    }
    return topper.name;
}

let topper = topScorer();
console.log("Top scorer: ", topper);

// adding new object to the array
students.push({name: "Jazz", age: 19, marks: 70});  
console.log(students);