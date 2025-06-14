const tasks = [] //init where to-do's will go


while(true) {
    let task = prompt('Enter a task (or type "done" to complete)')

    // check if user input is done or Done or DONE
    if (task.toLowerCase() === 'done') {
    break // if done breaking out of while loop
    }

    tasks.push(task) // adding user input to tasks
}


// To Display tasks
console.log("Your To-do List:")

for (let i = 0; 1 < tasks.length; i++) {
    console.log(`${i + 1}, ${tasks[i]}`);
}



// tasks.forEach((task, index) => {
//     console.log(`${index + 1}, ${task}`);
// })
