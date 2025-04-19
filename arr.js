//arrey min , max finder 

// let num = prompt("put the numbers here")

// let arrn = Array.from(num);

// let arr = arrn.sort();

// let last = arr.pop();

// let first = arr.shift();

// alert(`The minimum between this numbers is -> ${first} and maximum is -> ${last}`);


















// Create an empty array
// let arr = [];

// // Keep adding numbers until 0 is entered
// function addToArray() {
//     let input = prompt("Enter a number to add to the array (enter 0 to stop):");

//     while (input != 0) { // Loop until 0 is entered
//         arr.push(input); // Add input directly to the array
//         input = prompt("Enter another number (enter 0 to stop):");
//     }

//     alert("Final array: " + arr);
// }

// addToArray();








//to do list (console based)



// let tasks = [];

// function toDoApp() {
//   let choice = prompt("What do you want to do? [add, remove, show, exit]");
//   if (!choice) return; // user closed prompt

//   choice = choice.toLowerCase().trim();

//   if (choice === "exit") {
//     alert("Goodbye! 👋");
//     return;
//   } 
//   else if (choice === "add") {
//     let task = prompt("Enter a task to add");
//     if (task && task.trim()) {
//       tasks.push(task.trim());
//       alert("✅ Task added: " + task.trim());
//     } else {
//       alert("Task can't be empty!");
//     }
//   } 
//   else if (choice === "remove") {
//     if (tasks.length === 0) {
//       alert("No tasks to remove!");
//     } else {
//       let index = parseInt(prompt("Enter task number to remove:")) - 1;
//       if (!isNaN(index) && index >= 0 && index < tasks.length) {
//         let removed = tasks.splice(index, 1);
//         alert("❌ Removed: " + removed[0]);
//       } else {
//         alert("Invalid number!");
//       }
//     }
//   } 
//   else if (choice === "show") {
//     if (tasks.length === 0) {
//       alert("📭 No tasks yet.");
//     } else {
//       let output = "📝 Your Tasks:\n\n";
//       tasks.forEach((task, i) => output += `${i + 1}. ${task}\n`);
//       alert(output);
//     }
//   } 
//   else {
//     alert("❗Invalid choice! Try again.");
//   }

//   // call again for next input
//   setTimeout(toDoApp, 0);
// }

// // Start the app
// toDoApp();
