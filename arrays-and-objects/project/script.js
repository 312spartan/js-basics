// init students array

const students = [];


// add student
function addStudent(name, grade) {
    students.push({
        name,
        grade,
    });
}

// remove student

function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if(index !== -1){
        students.splice(index, 1)
        console.log(name, 'has been removed');
        
    } else {
        console.log(name, 'was not found');
    }
}


// function for student filtering

function filterTopStudents(minGrade) {

    return students.filter(student => student.grade >= minGrade);
}


// function to map students in a formatted list

function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

// start

console.log("students =", students);

// add students

addStudent("Axel", 76);
addStudent("Xion", 90);
addStudent("Roxas", 97);
addStudent("Sora", 71);
addStudent("Riku", 85);

console.log("STUDENT LIST:");
console.log(formatStudentList());

removeStudent("Riku");

console.log("STUDENT LIST:");
console.log(formatStudentList());

console.log("Students with Grade equal to or higher than 80");
console.log(filterTopStudents(80));




