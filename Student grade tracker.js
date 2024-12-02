let students = [];

function addStudent(name, grade) {
    students.push({ name, grade });
    console.log(`${name} with grade ${grade} has been added.`);
}


function calculateAverageGrade() {
    if (students.length === 0) {
        console.log("No students to calculate average.");
        return;
    }
    let total = students.reduce((sum, student) => sum + student.grade, 0);
    let average = total / students.length;
    console.log(`Average grade of the class: ${average.toFixed(2)}`);
}


function displayHighLowGrades() {
    if (students.length === 0) {
        console.log("No students to find grades.");
        return;
    }
    let grades = students.map(student => student.grade);
    let highest = Math.max(...grades);
    let lowest = Math.min(...grades);
    console.log(`Highest grade: ${highest}`);
    console.log(`Lowest grade: ${lowest}`);
}
function filterStudentsByGrade(threshold) {
    let filtered = students.filter(student => student.grade > threshold);
    if (filtered.length === 0) {
        console.log(`No students with grades above ${threshold}.`);
        return;
    }
    console.log(`Students with grades above ${threshold}:`);
    filtered.forEach(student => console.log(`- ${student.name}: ${student.grade}`));
}

addStudent("Hamza", 95);
addStudent("Alina", 85);
addStudent("Sara", 90);
addStudent("Mohsin", 78);

// Calculating the average grade
calculateAverageGrade();

// Displaying the highest and lowest grades
displayHighLowGrades();

// Filtering students by grade threshold
filterStudentsByGrade(90);
