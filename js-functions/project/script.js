function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

function assignGrade(average) {
if (average >= 85) {
    return "A";
}
else if (average >= 80) {
    return "B";
}
else if (average >= 70) {
    return "C";
}
else if (average >= 60) {
    return "D";
}
else if (average <= 60) {
    return "F";
}
// else if (average >= 70) {
//     console.log("Keep up the great work!");
// }
// else if (average <= 70) {
//     console.log('Sorry, try harder next time!');
// }
}


// get user input

// const score1 = parseFloat(prompt("Enter first Score:"))
// const score2 = parseFloat(prompt("Enter second Score:"))
// const score3 = parseFloat(prompt("Enter third Score:"))


const scores = []
for (let i = 0; i < 3; i++){
    const score = prompt(`Enter Score ${i + 1}:`)
    scores.push(parseInt(score))
}

const average = calculateAverage(scores[0], scores[1], scores[2]);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);

