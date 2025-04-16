//arrey min , max finder 

let num = prompt("put the numbers here")

let arrn = Array.from(num);

let arr = arrn.sort();

let last = arr.pop();

let first = arr.shift();

alert(`The minimum between this numbers is -> ${first} and maximum is -> ${last}`);


















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

