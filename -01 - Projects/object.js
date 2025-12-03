// goal: create a student object that contains (Name, Age, course, Marks in 3 subjects,
//       and a averageMarks())

const student = {
    name: "Nadir Ashraf",
    age: 20,
    course: "Computer Science",
    maths: 50,
    science: 30,
    english: 40,

    averageMarks: function() {
        return (this.maths + this.science + this.english) / 3;
    }
}

console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);
console.log(`Student course: ${student.course}`);
console.log(`Student average marks: ${student.averageMarks}`);